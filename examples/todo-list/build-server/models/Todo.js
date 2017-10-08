'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _mongoose = require('@graphite/mongoose');

var _decorators = require('@graphite/decorators');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

let Todo = (_dec = (0, _decorators.property)('String | required | minlength=1 | maxlength=90'), _dec2 = (0, _decorators.property)('Boolean'), _dec3 = (0, _decorators.query)(), _dec4 = (0, _decorators.allow)((_, todo, {}) => true), _dec5 = (0, _decorators.query)(), _dec6 = (0, _decorators.allow)((_, todo, {}) => true), _dec7 = (0, _decorators.query)(), _dec8 = (0, _decorators.allow)((_, todo, {}) => true), _dec9 = (0, _decorators.mutation)({ type: 'create' }), _dec10 = (0, _decorators.allow)((_, todo, {}) => true), _dec11 = (0, _decorators.mutation)({ type: 'update' }), _dec12 = (0, _decorators.mutation)({ type: 'remove' }), (0, _mongoose.mongoose)(_class = (0, _decorators.graphQl)(_class = (_class2 = class Todo {
  constructor() {
    _initDefineProp(this, 'name', _descriptor, this);

    _initDefineProp(this, 'status', _descriptor2, this);
  }

  getAllTodo() {

    return this.Model.find();
  }

  getSomeTodo() {
    return this.Model.find();
  }

  otroe() {
    return this.Model.find();
  }

  createTodo(_, { todo }) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(this.Model.create(todo));

        case 3:
          return _context.abrupt('return', _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          return _context.abrupt('return', [{
            key: '1',
            message: 'chfedau'
          }]);

        case 9:
        case 'end':
          return _context.stop();
      }
    }, null, this, [[0, 6]]);
  }

  updateTodo(_, { id, todo }) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(this.Model.findByIdAndUpdate(id, todo, { 'new': true }));

        case 3:
          return _context2.abrupt('return', _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2['catch'](0);
          return _context2.abrupt('return', null);

        case 9:
        case 'end':
          return _context2.stop();
      }
    }, null, this, [[0, 6]]);
  }

  removeTodo(_, { id }) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(this.Model.findByIdAndRemove(id));

        case 3:
          return _context3.abrupt('return', _context3.sent);

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3['catch'](0);
          return _context3.abrupt('return', null);

        case 9:
        case 'end':
          return _context3.stop();
      }
    }, null, this, [[0, 6]]);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'status', [_dec2], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'getAllTodo', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'getAllTodo'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getSomeTodo', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'getSomeTodo'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'otroe', [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'otroe'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'createTodo', [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'createTodo'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'updateTodo', [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, 'updateTodo'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'removeTodo', [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, 'removeTodo'), _class2.prototype)), _class2)) || _class) || _class);
exports.default = new Todo();
//# sourceMappingURL=Todo.js.map