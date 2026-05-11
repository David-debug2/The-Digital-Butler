// Element SDK for portfolio customization
window.elementSdk = {
  config: {},
  init: function(options) {
    this.defaultConfig = options.defaultConfig;
    this.onConfigChange = options.onConfigChange;
    this.mapToCapabilities = options.mapToCapabilities;
    this.mapToEditPanelValues = options.mapToEditPanelValues;

    // Load config from localStorage or use defaults
    this.config = this.loadConfig();
    this.onConfigChange(this.config);
  },
  loadConfig: function() {
    const stored = localStorage.getItem('portfolioConfig');
    return stored ? JSON.parse(stored) : this.defaultConfig;
  },
  setConfig: function(newConfig) {
    this.config = { ...this.config, ...newConfig };
    localStorage.setItem('portfolioConfig', JSON.stringify(this.config));
    this.onConfigChange(this.config);
  },
  getConfig: function() {
    return this.config;
  }
};