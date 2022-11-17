/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.cuponImageEl;
    this.cuponTitleEl = document.querySelector('#cuponTitle');
    this.cuponDescriptionEl = document.querySelector('#cuponDescription');
    this.cuponCodeEl = document.querySelector('#cuponCode');

    this.cuponInfo = {
      kazetachinuButton: {
        title: 'CUPON',
        // imgEl: document.querySelector('#kazetachinucuponImage'),
        imgEl: document.querySelector('#CuponImage'),
        description: 'descripcion del cupon',
        code: 'codigo_del_cupon',
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var cuponInfo = this.cuponInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.cuponImageEl) { this.cuponImageEl.object3D.visible = false; }


    // this.cuponTitleEl.setAttribute('text', 'value', cuponInfo.title);
    // this.cuponDescriptionEl.setAttribute('text', 'value', cuponInfo.description);
    // this.cuponCodeEl.setAttribute('text', 'value', cuponInfo.code);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});
