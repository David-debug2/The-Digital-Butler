// Main JavaScript for the portfolio
console.log('main.js loaded successfully!');

let currentChannel = 'welcome';

// Global functions - must be accessible to onclick handlers
window.switchServer = function(serverId) {
  document.querySelectorAll('.server-icon').forEach(el => el.classList.remove('active'));
  const icon = document.querySelector(`[data-server="${serverId}"]`);
  if (icon) icon.classList.add('active');
};

window.switchChannel = function(el, channelId) {
  document.querySelectorAll('.channel-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentChannel = channelId;
  renderContent(channelId);
};

window.toggleCategory = function(header) {
  const channels = header.nextElementSibling;
  const chevron = header.querySelector('i');
  if (channels.style.display === 'none') {
    channels.style.display = 'block';
    chevron.style.transform = '';
  } else {
    channels.style.display = 'none';
    chevron.style.transform = 'rotate(-90deg)';
  }
};

window.renderContent = function(channelId) {
  const data = window.portfolioData[channelId];
  if (!data) {
    console.error('No data found for channel:', channelId);
    return;
  }

  document.getElementById('channel-title').textContent = data.title;
  document.getElementById('channel-desc').textContent = data.desc;
  document.getElementById('input-placeholder').textContent = `Message #${data.title}`;

  const area = document.getElementById('content-area');
  area.innerHTML = `
    <div class="mb-6 pb-4 border-b border-[#40444b]">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-10 h-10 rounded-full bg-discord-accent flex items-center justify-center text-white font-bold">
          ${data.messages[0]?.author.charAt(0) || 'D'}
        </div>
        <div>
          <span class="text-white font-semibold">${data.messages[0]?.author || 'David'}</span>
          <span class="text-discord-muted text-sm ml-2">${data.messages[0]?.timestamp || 'Today'}</span>
        </div>
      </div>
      <p class="text-discord-text">${data.desc}</p>
    </div>
    ${data.messages.map(msg => `
      <div class="message-group">
        <div class="flex items-start gap-4">
          <img src="${msg.avatar}" alt="${msg.author} avatar" class="w-10 h-10 rounded-full">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-white font-semibold">${msg.author}</span>
              <span class="text-discord-muted text-xs">${msg.timestamp}</span>
            </div>
            ${msg.content ? `<p class="text-discord-text mb-2">${msg.content.replace(/\n/g, '<br>')}</p>` : ''}
            ${msg.embed ? `
              <div class="embed-card">
                <div class="flex gap-4">
                  <div class="flex-1">
                    <h4 class="text-white font-semibold mb-1">${msg.embed.title}</h4>
                    <p class="text-discord-muted text-sm">${msg.embed.description}</p>
                  </div>
                  ${msg.embed.image ? `<img src="${msg.embed.image}" alt="${msg.embed.title}" class="w-20 h-20 rounded object-cover">` : ''}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('')}
  `;
  lucide.createIcons();
}

// Element SDK Configuration
const defaultConfig = {
  display_name: 'Designer',
  discord_handle: '@designer',
  status_text: 'Available for commissions',
  background_color: '#36393f',
  sidebar_color: '#2f3136',
  accent_color: '#5865F2',
  text_color: '#dcddde',
  dark_color: '#202225',
  font_family: 'Inter',
  font_size: 14
};

window.applyConfig = function(config) {
  document.getElementById('user-display-name').textContent = config.display_name || defaultConfig.display_name;
  document.getElementById('user-handle').textContent = config.discord_handle || defaultConfig.discord_handle;
  document.getElementById('status-text').textContent = config.status_text || defaultConfig.status_text;

  const font = config.font_family || defaultConfig.font_family;
  document.body.style.fontFamily = `${font}, Inter, sans-serif`;

  // Colors
  document.documentElement.style.setProperty('--bg', config.background_color || defaultConfig.background_color);
  document.documentElement.style.setProperty('--accent', config.accent_color || defaultConfig.accent_color);
};

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => { applyConfig(config); },
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
      { get: () => config.sidebar_color || defaultConfig.sidebar_color, set: (v) => { config.sidebar_color = v; window.elementSdk.setConfig({ sidebar_color: v }); } },
      { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } },
      { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
      { get: () => config.dark_color || defaultConfig.dark_color, set: (v) => { config.dark_color = v; window.elementSdk.setConfig({ dark_color: v }); } }
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
  }),
  mapToEditPanelValues: (config) => new Map([
    ['display_name', config.display_name || defaultConfig.display_name],
    ['discord_handle', config.discord_handle || defaultConfig.discord_handle],
    ['status_text', config.status_text || defaultConfig.status_text]
  ])
});

// Initialize portfolio when DOM is ready
function initPortfolio() {
  // Ensure portfolioData is available
  if (!window.portfolioData) {
    console.error('Portfolio data not loaded. Make sure data_sdk.js is loaded.');
    return;
  }

  // Set up event listeners for category headers
  document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', function() {
      toggleCategory(this);
    });
  });

  // Render initial content
  renderContent('welcome');
  lucide.createIcons();
  
  // Apply config
  applyConfig(defaultConfig);
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}