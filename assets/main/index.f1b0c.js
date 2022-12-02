window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "752aep/p2REwIGM/BgRsOzH", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.score = null;
        _this.time = 10;
        _this.moveTime = 0;
        return _this;
      }
      NewClass.prototype.LoseTime = function() {
        if (1 == this.moveTime) {
          this.time -= 1;
          this.score.string = "" + this.time.toString();
        }
      };
      NewClass.prototype.MoveTime = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
         case cc.macro.KEY.left:
          this.moveTime = 1;
          break;

         case cc.macro.KEY.r:
          cc.director.loadScene(cc.director.getScene().name);
        }
      };
      NewClass.prototype.StopTime = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
         case cc.macro.KEY.left:
          this.moveTime = 0;
        }
      };
      NewClass.prototype.onLoad = function() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoveTime, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.StopTime, this);
        this.schedule(this.LoseTime, 1, cc.macro.REPEAT_FOREVER, 0);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        0 == this.time && cc.director.loadScene(cc.director.getScene().name);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "score", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LoadScene2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63000baKMZAO4uqB+ErRJhg", "LoadScene2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onCollisionEnter = function(otherCollider, selfCollider) {
        "Man<BoxCollider>" == otherCollider.name && "Portal<BoxCollider>" == selfCollider.name && cc.director.loadScene("Level2");
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LoadScene3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "480f8M7FBVDBosS38vUZX4s", "LoadScene3");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onCollisionEnter = function(otherCollider, selfCollider) {
        "Man<BoxCollider>" == otherCollider.name && "Portal<BoxCollider>" == selfCollider.name && cc.director.loadScene("Level3");
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LoadScene4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91c841L6mhNQphYcLNtdAbU", "LoadScene4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onCollisionEnter = function(otherCollider, selfCollider) {
        "Man<BoxCollider>" == otherCollider.name && "Portal<BoxCollider>" == selfCollider.name && cc.director.loadScene("Level4");
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LoadScene5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b350aJhipIt6tM29XtTZq2", "LoadScene5");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onCollisionEnter = function(otherCollider, selfCollider) {
        "Man<BoxCollider>" == otherCollider.name && "Portal<BoxCollider>" == selfCollider.name && cc.director.loadScene("WIN!");
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ManControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22ea1B68ClIdLs8oUbFUavM", "ManControl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveRight = 0;
        _this.moveLeft = 0;
        _this.speed = 200;
        _this.actualSpeed = 0;
        _this.animation = 0;
        _this.saltando = false;
        _this.bajando = false;
        _this.posicionY = 0;
        _this.current_scene = null;
        return _this;
      }
      NewClass.prototype.onCollisionEnter = function(otherCollider, selfCollider) {
        "SpikeBall<CircleCollider>" == otherCollider.name && "Man<BoxCollider>" == selfCollider.name && cc.director.loadScene(this.current_scene.name);
        "SpikeBall2<CircleCollider>" == otherCollider.name && "Man<BoxCollider>" == selfCollider.name && cc.director.loadScene(this.current_scene.name);
      };
      NewClass.prototype.MoveMan = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
          this.moveRight = 1;
          this.moveLeft = 0;
          this.actualSpeed = 1;
          break;

         case cc.macro.KEY.left:
          this.moveLeft = 1;
          this.moveRight = 0;
          this.actualSpeed = 1;
          break;

         case cc.macro.KEY.space:
          if (false == this.saltando && false == this.bajando) {
            this.saltando = true;
            this.node.getComponent(cc.Animation).stop("ManRunAnimation");
            this.node.getComponent(cc.Animation).play("ManJumpAnimation");
          }
        }
      };
      NewClass.prototype.StopMan = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
          this.moveRight = 0;
          this.node.getComponent(cc.Animation).stop();
          this.actualSpeed = 0;
          this.animation = 0;
          break;

         case cc.macro.KEY.left:
          this.moveLeft = 0;
          this.node.getComponent(cc.Animation).stop();
          this.actualSpeed = 0;
          this.animation = 0;
        }
      };
      NewClass.prototype.onLoad = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoveMan, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.StopMan, this);
        this.current_scene = cc.director.getScene();
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        this.node.x <= -455 && this.node.setPosition(-454, this.node.position.y);
        if (1 == this.moveRight) {
          this.node.scaleX = 1;
          this.node.setPosition(this.node.position.x += this.speed * dt, this.node.position.y);
        }
        if (1 == this.moveLeft) {
          this.node.scaleX = -1;
          this.node.setPosition(this.node.position.x -= this.speed * dt, this.node.position.y);
        }
        false == this.saltando && false == this.bajando && (this.posicionY = this.node.y);
        true == this.saltando && this.node.setPosition(this.node.position.x, this.node.position.y += (this.speed + 100) * dt);
        if (this.posicionY <= this.node.y - 100) {
          this.bajando = true;
          this.saltando = false;
        }
        if (true == this.bajando) {
          this.node.setPosition(this.node.position.x, this.node.position.y -= (this.speed + 100) * dt);
          if (this.posicionY >= this.node.y) {
            this.node.setPosition(this.node.position.x, this.posicionY);
            this.bajando = false;
            this.animation = 0;
          }
        }
        if (1 == this.actualSpeed && 0 == this.animation) {
          this.node.getComponent(cc.Animation).play("ManRunAnimation");
          this.animation = 1;
        }
      };
      __decorate([ property(cc.Scene) ], NewClass.prototype, "current_scene", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  spikeball2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "befc54DwFFIeK0AmwomiAjf", "spikeball2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.move = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoveSpike, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.StopSpike, this);
      };
      NewClass.prototype.MoveSpike = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
         case cc.macro.KEY.left:
          this.speed = 1e3;
        }
      };
      NewClass.prototype.StopSpike = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
         case cc.macro.KEY.left:
          this.speed = 0;
        }
      };
      NewClass.prototype.start = function() {
        this.node.getComponent(cc.Animation).play();
      };
      NewClass.prototype.update = function(dt) {
        if (0 == this.move) {
          this.node.rotation -= this.speed * dt;
          this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * dt);
        }
        if (1 == this.move) {
          this.node.rotation += this.speed * dt;
          this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * dt);
        }
        this.node.position.y <= -240 && (this.move = 1);
        this.node.position.y >= 270 && (this.move = 0);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  spikeball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3e3f1XhFRDH6lHSAkNDOh2", "spikeball");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.move = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoveSpike, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.StopSpike, this);
      };
      NewClass.prototype.MoveSpike = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
         case cc.macro.KEY.left:
          this.speed = 220;
        }
      };
      NewClass.prototype.StopSpike = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.right:
         case cc.macro.KEY.left:
          this.speed = 0;
        }
      };
      NewClass.prototype.start = function() {
        this.node.getComponent(cc.Animation).play();
      };
      NewClass.prototype.update = function(dt) {
        if (0 == this.move) {
          this.node.rotation -= this.speed * dt;
          this.node.setPosition(this.node.position.x -= this.speed * dt, this.node.position.y);
        }
        if (1 == this.move) {
          this.node.rotation += this.speed * dt;
          this.node.setPosition(this.node.position.x += this.speed * dt, this.node.position.y);
        }
        this.node.position.x <= -400 && (this.move = 1);
        this.node.position.x >= 400 && (this.move = 0);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Game", "LoadScene2", "LoadScene3", "LoadScene4", "LoadScene5", "ManControl", "spikeball", "spikeball2" ]);
//# sourceMappingURL=index.js.map
