(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["d3"], factory);
	else if(typeof exports === 'object')
		exports["fornac"] = factory(require("d3"));
	else
		root["fornac"] = factory(root["d3"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__990__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connection: () => (/* binding */ Connection)
/* harmony export */ });
/* harmony import */ var _loop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(724);
/* harmony import */ var _region_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);


function Connection() {
  this.loop = new _loop_js__WEBPACK_IMPORTED_MODULE_0__/* .Loop */ .r();
  this.region = new _region_js__WEBPACK_IMPORTED_MODULE_1__/* .Region */ .y();
  // Start and end form the 1st base pair of the region.
  this.start = null;
  this.end = null;
  this.xrad = null;
  this.yrad = null;
  this.angle = null;
  // True if segment between this connection and the
  // next must be extruded out of the circle
  this.extruded = null;
  // True if the extruded segment must be drawn long.
  this.broken = null;
  this._isNull = false;
}
Connection.prototype.isNull = function () {
  return this._isNull;
};
Connection.prototype.setNull = function (isNull) {
  this._isNull = isNull;
};
Connection.prototype.getLoop = function () {
  return this.loop;
};
Connection.prototype.setLoop = function (loop) {
  this.loop = loop;
};
Connection.prototype.getRegion = function () {
  return this.region;
};
Connection.prototype.setRegion = function (region) {
  this.region = region;
};
Connection.prototype.getStart = function () {
  return this.start;
};
Connection.prototype.setStart = function (start) {
  this.start = start;
};
Connection.prototype.getEnd = function () {
  return this.end;
};
Connection.prototype.setEnd = function (end) {
  this.end = end;
};
Connection.prototype.getXrad = function () {
  return this.xrad;
};
Connection.prototype.setXrad = function (xrad) {
  this.xrad = xrad;
};
Connection.prototype.getYrad = function () {
  return this.yrad;
};
Connection.prototype.setYrad = function (yrad) {
  this.yrad = yrad;
};
Connection.prototype.getAngle = function () {
  return this.angle;
};
Connection.prototype.setAngle = function (angle) {
  this.angle = angle;
};
Connection.prototype.isExtruded = function () {
  return this.extruded;
};
Connection.prototype.setExtruded = function (extruded) {
  this.extruded = extruded;
};
Connection.prototype.isBroken = function () {
  return this.broken;
};
Connection.prototype.setBroken = function (broken) {
  this.broken = broken;
};

/***/ }),

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Loop)
/* harmony export */ });
/* harmony import */ var _connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(953);

function Loop() {
  this.nconnection = null;
  this.connections = [];
  this._connections = [];
  this.number = null;
  this.depth = null;
  this.mark = null;
  this.x = null;
  this.y = null;
  this.radius = null;
}
Loop.prototype.getNconnection = function () {
  return this.nconnection;
};
Loop.prototype.setNconnection = function (nconnection) {
  this.nconnection = nconnection;
};
Loop.prototype.setConnection = function (i, c) {
  if (c != null) {
    this._connections[i] = c;
  } else {
    if (!this._connections[i]) {
      this._connections[i] = new _connection_js__WEBPACK_IMPORTED_MODULE_0__.Connection();
    }
    this._connections[i].setNull(true);
  }
};
Loop.prototype.getConnection = function (i) {
  var Connection = __webpack_require__(953);
  if (!this._connections[i]) {
    this._connections[i] = new Connection();
  }
  var c = this._connections[i];
  if (c.isNull()) {
    return null;
  } else {
    return c;
  }
};
Loop.prototype.addConnection = function (i, c) {
  this._connections.push(c);
};
Loop.prototype.getNumber = function () {
  return this.number;
};
Loop.prototype.setNumber = function (number) {
  this.number = number;
};
Loop.prototype.getDepth = function () {
  return this.depth;
};
Loop.prototype.setDepth = function (depth) {
  this.depth = depth;
};
Loop.prototype.isMark = function () {
  return this.mark;
};
Loop.prototype.setMark = function (mark) {
  this.mark = mark;
};
Loop.prototype.getX = function () {
  return this.x;
};
Loop.prototype.setX = function (x) {
  this.x = x;
};
Loop.prototype.getY = function () {
  return this.y;
};
Loop.prototype.setY = function (y) {
  this.y = y;
};
Loop.prototype.getRadius = function () {
  return this.radius;
};
Loop.prototype.setRadius = function (radius) {
  this.radius = radius;
};

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ Region)
/* harmony export */ });
function Region() {
  this._start1 = null;
  this._end1 = null;
  this._start2 = null;
  this._end2 = null;
}
Region.prototype.getStart1 = function () {
  return this._start1;
};
Region.prototype.setStart1 = function (start1) {
  this._start1 = start1;
};
Region.prototype.getEnd1 = function () {
  return this._end1;
};
Region.prototype.setEnd1 = function (end1) {
  this._end1 = end1;
};
Region.prototype.getStart2 = function () {
  return this._start2;
};
Region.prototype.setStart2 = function (start2) {
  this._start2 = start2;
};
Region.prototype.getEnd2 = function () {
  return this._end2;
};
Region.prototype.setEnd2 = function (end2) {
  this._end2 = end2;
};

/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(742)
const ieee754 = __webpack_require__(645)
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.lW = Buffer
__webpack_unused_export__ = SlowBuffer
exports.h2 = 50

const K_MAX_LENGTH = 0x7fffffff
__webpack_unused_export__ = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.h2
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ 274:
/***/ ((module) => {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 977:
/***/ ((module) => {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"nodeStrokeWidth":"0.8","directionArrowSize":"6","directionArrowWidth":"0.7","node":"fornac-node","directionArrow":"fornac-directionArrow","plot":"fornac-plot","selectedNode":"fornac-selectedNode","nodeLabel":"fornac-nodeLabel","link":"fornac-link","plotLabel":"fornac-plotLabel","transparent":"fornac-transparent","dragLine":"fornac-dragLine","mouseEventHelper":"fornac-mouseEventHelper"};

/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// The MIT License (MIT)
//
// Copyright (c) 2014 Jonas Finnemann Jensen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

module.exports = __webpack_require__(861);


/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(764)["lW"];
// The MIT License (MIT)
//
// Copyright (c) 2014 Jonas Finnemann Jensen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var uuid = __webpack_require__(614);

/** @type {(bytes: Uint8Array) => string} */
var toBase64 = (() => {
  if (typeof Buffer !== 'undefined') {
    return (bytes) => Buffer.from(bytes).toString('base64');
  }
  return (bytes) => btoa(String.fromCharCode(...bytes));
})();

/** @type {(base64: string) => Uint8Array | Buffer} */
var fromBase64 = (() => {
  if (typeof Buffer !== 'undefined') {
    return (base64) => Buffer.from(base64, 'base64');
  }
  return (base64) => Uint8Array.from(atob(base64), c => c.charCodeAt(0));
})();

/**
 * Returns the given uuid as a 22 character slug. This can be a regular v4
 * slug or a "nice" slug.
 */
exports.encode = function(uuid_) {
  var bytes   = uuid.parse(uuid_);
  var base64 = toBase64(bytes);
  var slug = base64
              .replace(/\+/g, '-')  // Replace + with - (see RFC 4648, sec. 5)
              .replace(/\//g, '_')  // Replace / with _ (see RFC 4648, sec. 5)
              .substring(0, 22);    // Drop '==' padding
  return slug;
};

/**
 * Returns the uuid represented by the given v4 or "nice" slug
 */
exports.decode = function(slug) {
  var base64 = slug
                  .replace(/-/g, '+')
                  .replace(/_/g, '/')
                  + '==';
  return uuid.stringify(fromBase64(base64));
};

/**
 * Returns a randomly generated uuid v4 compliant slug
 */
exports.v4 = function() {
  var bytes   = uuid.v4(null, new Uint8Array(16));
  var base64 = toBase64(bytes);
  var slug = base64
              .replace(/\+/g, '-')  // Replace + with - (see RFC 4648, sec. 5)
              .replace(/\//g, '_')  // Replace / with _ (see RFC 4648, sec. 5)
              .substring(0, 22);    // Drop '==' padding
  return slug;
};

/**
 * Returns a randomly generated uuid v4 compliant slug which conforms to a set
 * of "nice" properties, at the cost of some entropy. Currently this means one
 * extra fixed bit (the first bit of the uuid is set to 0) which guarantees the
 * slug will begin with [A-Za-f]. For example such slugs don't require special
 * handling when used as command line parameters (whereas non-nice slugs may
 * start with `-` which can confuse command line tools).
 *
 * Potentially other "nice" properties may be added in future to further
 * restrict the range of potential uuids that may be generated.
 */
exports.nice = function() {
  var bytes   = uuid.v4(null, new Uint8Array(16));
  bytes[0] = bytes[0] & 0x7f;  // unset first bit to ensure [A-Za-f] first char
  var base64 = toBase64(bytes);
  var slug = base64
              .replace(/\+/g, '-')  // Replace + with - (see RFC 4648, sec. 5)
              .replace(/\//g, '_')  // Replace / with _ (see RFC 4648, sec. 5)
              .substring(0, 22);    // Drop '==' padding
  return slug;
};


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NIL: () => (/* reexport */ nil),
  parse: () => (/* reexport */ esm_browser_parse),
  stringify: () => (/* reexport */ esm_browser_stringify),
  v1: () => (/* reexport */ esm_browser_v1),
  v3: () => (/* reexport */ esm_browser_v3),
  v4: () => (/* reexport */ esm_browser_v4),
  v5: () => (/* reexport */ esm_browser_v5),
  validate: () => (/* reexport */ esm_browser_validate),
  version: () => (/* reexport */ esm_browser_version)
});

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_browser_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_browser_stringify(b);
}

/* harmony default export */ const esm_browser_v1 = (v1);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/parse.js


function parse(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_browser_parse = (parse);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_browser_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/md5.js
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ const esm_browser_md5 = (md5);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v3.js


var v3 = v35('v3', 0x30, esm_browser_md5);
/* harmony default export */ const esm_browser_v3 = (v3);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/sha1.js
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const esm_browser_sha1 = (sha1);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v5.js


var v5 = v35('v5', 0x50, esm_browser_sha1);
/* harmony default export */ const esm_browser_v5 = (v5);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/version.js


function version(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const esm_browser_version = (version);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/index.js










/***/ }),

/***/ 990:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__990__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ColorScheme: () => (/* reexport */ ColorScheme),
  FornaContainer: () => (/* reexport */ FornaContainer),
  RNAUtilities: () => (/* reexport */ RNAUtilities),
  rnaPlot: () => (/* reexport */ rnaPlot),
  rnaTreemap: () => (/* reexport */ rnaTreemap)
});

// EXTERNAL MODULE: ./src/fornac.css
var fornac = __webpack_require__(977);
var fornac_default = /*#__PURE__*/__webpack_require__.n(fornac);
// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(990);
var external_d3_default = /*#__PURE__*/__webpack_require__.n(external_d3_);
// EXTERNAL MODULE: ./node_modules/slugid/index.js
var node_modules_slugid = __webpack_require__(386);
// EXTERNAL MODULE: ./src/d3-context-menu.css
var d3_context_menu = __webpack_require__(274);
;// CONCATENATED MODULE: ./src/img/play.svg
/* harmony default export */ const play = (__webpack_require__.p + "02188894d5236b1517df3210b79c2a7f.svg");
;// CONCATENATED MODULE: ./src/d3-context-menu.js




function contextMenu(menu, opts) {
  var previouslyMouseUp = false;
  var clickAway = function clickAway() {};
  var uid = node_modules_slugid.nice();
  var rootElement = null;
  var orientation = 'right'; // display the menu to the right of the mouse click
  // or parent elemement
  var initialPos = null;
  var parentStart = null;
  var openCallback, closeCallback;
  if (typeof opts === 'function') {
    openCallback = opts;
  } else {
    opts = opts || {};
    openCallback = opts.onOpen;
    closeCallback = opts.onClose;
  }
  if ('rootElement' in opts) rootElement = opts['rootElement'];
  if ('pos' in opts) {
    // do we want to place this menu somewhere specific?
    initialPos = opts.pos;
  }
  if ('orientation' in opts) {
    orientation = opts.orientation;
  }
  if ('parentStart' in opts) {
    parentStart = opts.parentStart;
  }

  // create the div element that will hold the context menu
  external_d3_default().selectAll('.d3-context-menu-' + uid).data([1]).enter().append('div').classed('d3-context-menu', true).classed('d3-context-menu-' + uid, true);

  // close menu
  external_d3_default().select('body').on('click.d3-context-menu-' + uid, function () {
    if (previouslyMouseUp) {
      previouslyMouseUp = false;
      return;
    }
    console.log('body click close');
    external_d3_default().select('.d3-context-menu-' + uid).style('display', 'none');
    orientation = 'right';
    if (closeCallback) {
      closeCallback();
    }
  });

  // this gets executed when a contextmenu event occurs
  return function (data, index) {
    var pMouseUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var clickAwayFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var elm = this;
    var contextMenuPos = null;
    var mousePos = null;
    var currentThis = this;
    if (rootElement == null) mousePos = external_d3_default().mouse(this);else mousePos = external_d3_default().mouse(rootElement); // for recursive menus, we need the mouse
    // position relative to another element

    clickAway = clickAwayFunc;
    var openChildMenuUid = null;
    previouslyMouseUp = pMouseUp;
    external_d3_default().selectAll('.d3-context-menu-' + uid).html('');
    var list = external_d3_default().selectAll('.d3-context-menu-' + uid).on('contextmenu', function (d) {
      console.log('context-menu close');
      external_d3_default().select('.d3-context-menu-' + uid).style('display', 'none');
      orientation = 'right';
      external_d3_default().event.preventDefault();
      external_d3_default().event.stopPropagation();
    }).append('ul');
    list.selectAll('li').data(typeof menu === 'function' ? menu(data) : menu).enter().append('li').attr('class', function (d) {
      console.log('d:', d);
      var ret = '';
      if (d.divider) {
        ret += ' is-divider';
      }
      if (d.disabled) {
        ret += ' is-disabled';
      }
      if (!d.action) {
        ret += ' is-header';
      }
      if ('children' in d) {
        ret += ' d3-context-menu-recursive';
      }
      return ret;
    }).html(function (d) {
      if (d.divider) {
        return '<hr>';
      }
      if (!d.title) {
        console.error('No title attribute set. Check the spelling of your options.');
      }
      return typeof d.title === 'string' ? d.title : d.title(data);
    }).on('click', function (d, i) {
      if (d.disabled) return; // do nothing if disabled
      if (!d.action) return; // headers have no "action"
      d.action(elm, data, index, mousePos);
      console.log('click close');

      // close all context menus
      external_d3_default().selectAll('.d3-context-menu').style('display', 'none');
      orientation = 'right';
      if (closeCallback) {
        closeCallback();
      }
    }).on('mouseenter', function (d, i) {
      external_d3_default().select(this).classed('d3-context-menu-selected', true);
      if (openChildMenuUid != null) {
        // there's a child menu open

        // unselect all items
        external_d3_default().select('.d3-context-menu-' + uid).selectAll('li').classed('d3-context-menu-selected', false);
        if (typeof d.children == 'undefined') {
          console.log("no children close");
          // no children, so hide any open child menus
          external_d3_default().select('.d3-context-menu-' + openChildMenuUid).style('display', 'none');
          openChildMenuUid = null;
          return;
        }
        if (d.childUid == openChildMenuUid) {
          // the correct child menu is already open
          return;
        } else {
          // need to open a different child menu
          console.log('open different child menu close');

          // close the already open one
          external_d3_default().select('.d3-context-menu-' + openChildMenuUid).style('display', 'none');
          openChildMenuUid = null;
        }
      }

      // there should be no menu open right now
      if (typeof d.children != 'undefined') {
        var _boundingRect = this.getBoundingClientRect();
        var childrenContextMenu = null;
        if (orientation == 'left') {
          childrenContextMenu = contextMenu(d.children, {
            'rootElement': currentThis,
            'pos': [_boundingRect.left + window.pageXOffset, _boundingRect.top - 2 + window.pageYOffset],
            'orientation': 'left'
          });
        } else {
          childrenContextMenu = contextMenu(d.children, {
            'pos': [_boundingRect.left + _boundingRect.width + window.pageXOffset, _boundingRect.top - 2 + window.pageYOffset],
            'rootElement': currentThis,
            'parentStart': [_boundingRect.left + window.pageXOffset, _boundingRect.top - 2 + window.pageYOffset]
          });
        }
        d.childUid = childrenContextMenu.apply(this, [data, i, true, function () {}]);
        openChildMenuUid = d.childUid;
      }
      external_d3_default().select(this).classed('d3-context-menu-selected', true);
    }).on('mouseleave', function (d, i) {
      if (openChildMenuUid == null) {
        external_d3_default().select(this).classed('d3-context-menu-selected', false);
      }
    });
    list.selectAll('.d3-context-menu-recursive').append('img').attr('src', play).attr('width', '14px').attr('height', '14px').style('position', 'absolute').style('right', '5px');

    // the openCallback allows an action to fire before the menu is displayed
    // an example usage would be closing a tooltip
    if (openCallback) {
      if (openCallback(data, index) === false) {
        return uid;
      }
    }
    var contextMenuSelection = external_d3_default().select('.d3-context-menu-' + uid).style('display', 'block');
    if (initialPos == null) {
      external_d3_default().select('.d3-context-menu-' + uid).style('left', (external_d3_default()).event.pageX - 2 + 'px').style('top', (external_d3_default()).event.pageY - 2 + 'px');
    } else {
      external_d3_default().select('.d3-context-menu-' + uid).style('left', initialPos[0] + 'px').style('top', initialPos[1] + 'px');
    }

    // check if the menu disappears off the side of the window
    var boundingRect = contextMenuSelection.node().getBoundingClientRect();
    if (boundingRect.left + boundingRect.width > window.innerWidth || orientation == 'left') {
      orientation = 'left';

      // menu goes of the end of the window, position it the other way
      if (initialPos == null) {
        // place the menu where the user clicked
        external_d3_default().select('.d3-context-menu-' + uid).style('left', (external_d3_default()).event.pageX - 2 - boundingRect.width + 'px').style('top', (external_d3_default()).event.pageY - 2 + 'px');
      } else {
        if (parentStart != null) {
          external_d3_default().select('.d3-context-menu-' + uid).style('left', parentStart[0] - boundingRect.width + 'px').style('top', parentStart[1] + 'px');
        } else {
          external_d3_default().select('.d3-context-menu-' + uid).style('left', initialPos[0] - boundingRect.width + 'px').style('top', initialPos[1] + 'px');
        }
      }
    }

    // display context menu

    if (previouslyMouseUp) return uid;
    external_d3_default().event.preventDefault();
    external_d3_default().event.stopPropagation();
    //d3.event.stopImmediatePropagation();
    //
    return uid;
  };
}
;
;// CONCATENATED MODULE: ./src/rnautils.js
var numberSort = function numberSort(a, b) {
  return a - b;
};
function arraysEqual(a, b) {
  // courtesy of 
  // http://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function RNAUtilities() {
  var self = this;

  // the brackets to use when constructing dotbracket strings
  // with pseudoknots
  self.bracketLeft = "([{<ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  self.bracketRight = ")]}>abcdefghijklmnopqrstuvwxyz".split("");
  self.inverseBrackets = function (bracket) {
    var res = {};
    for (var i = 0; i < bracket.length; i++) {
      res[bracket[i]] = i;
    }
    return res;
  };
  self.maximumMatching = function maximumMatching(pt) {
    // Courtesy of the great Ronny Lorenz

    var n = pt[0];
    var TURN = 0; //minimal number of nucleotides in the hairpin

    /* array init */
    var mm = new Array(n + 1);
    for (var i = 0; i <= n; i++) {
      mm[i] = new Array(n + 1);
      for (var j = i; j <= n; j++) mm[i][j] = 0;
    }
    var maximum = 0;

    /* actual computation */
    for (var i = n - TURN - 1; i > 0; i--) for (var j = i + TURN + 1; j <= n; j++) {
      maximum = mm[i][j - 1];
      for (var l = j - TURN - 1; l >= i; l--) {
        if (pt[l] === j) {
          // we have a base pair here
          maximum = Math.max(maximum, (l > i ? mm[i][l - 1] : 0) + 1 + (j - l - 1 > 0 ? mm[l + 1][j - 1] : 0));
        }
      }
      mm[i][j] = maximum;
    }
    maximum = mm[1][n];
    return mm;
  };
  self.backtrackMaximumMatching = function (mm, oldPt) {
    var pt = Array.apply(null, Array(mm.length)).map(function () {
      return 0;
    });
    //create an array containing zeros

    self.mmBt(mm, pt, oldPt, 1, mm.length - 1);
    return pt;
  };
  self.mmBt = function (mm, pt, oldPt, i, j) {
    // Create a pairtable from the backtracking
    var maximum = mm[i][j];
    var TURN = 0;
    if (j - i - 1 < TURN) return; /* no more pairs */

    if (mm[i][j - 1] == maximum) {
      /* j is unpaired */
      self.mmBt(mm, pt, oldPt, i, j - 1);
      return;
    }
    for (var q = j - TURN - 1; q >= i; q--) {
      /* j is paired with some q */
      if (oldPt[j] !== q) continue;
      var leftPart = q > i ? mm[i][q - 1] : 0;
      var enclosedPart = j - q - 1 > 0 ? mm[q + 1][j - 1] : 0;
      if (leftPart + enclosedPart + 1 == maximum) {
        // there's a base pair between j and q
        pt[q] = j;
        pt[j] = q;
        if (i < q) self.mmBt(mm, pt, oldPt, i, q - 1);
        self.mmBt(mm, pt, oldPt, q + 1, j - 1);
        return;
      }
    }

    //alert(i + "," + j + ": backtracking failed!");
    console.log('FAILED!!!' + i + ',' + j + ': backtracking failed!');
  };
  self.dotbracketToPairtable = function (dotbracket) {
    // create an array and initialize it to 0
    var pt = Array.apply(null, new Array(dotbracket.length + 1)).map(Number.prototype.valueOf, 0);

    //  the first element is always the length of the RNA molecule
    pt[0] = dotbracket.length;

    // store the pairing partners for each symbol
    var stack = {};
    for (var i = 0; i < self.bracketLeft.length; i++) {
      stack[i] = [];
    }

    // lookup the index of each symbol in the bracket array
    var inverseBracketLeft = self.inverseBrackets(self.bracketLeft);
    var inverseBracketRight = self.inverseBrackets(self.bracketRight);
    for (var i = 0; i < dotbracket.length; i++) {
      var a = dotbracket[i];
      var ni = i + 1;
      if (a == '.' || a == 'o') {
        // unpaired
        pt[ni] = 0;
      } else {
        if (a in inverseBracketLeft) {
          // open pair?
          stack[inverseBracketLeft[a]].push(ni);
        } else if (a in inverseBracketRight) {
          // close pair?
          var j = stack[inverseBracketRight[a]].pop();
          pt[ni] = j;
          pt[j] = ni;
        } else {
          throw "Unknown symbol in dotbracket string";
        }
      }
    }
    for (var key in stack) {
      if (stack[key].length > 0) {
        throw "Unmatched base at position " + stack[key][0];
      }
    }
    return pt;
  };
  self.insertIntoStack = function (stack, i, j) {
    var k = 0;
    while (stack[k].length > 0 && stack[k][stack[k].length - 1] < j) {
      k += 1;
    }
    stack[k].push(j);
    return k;
  };
  self.deleteFromStack = function (stack, j) {
    var k = 0;
    while (stack[k].length === 0 || stack[k][stack[k].length - 1] != j) {
      k += 1;
    }
    stack[k].pop();
    return k;
  };
  self.pairtableToDotbracket = function (pt) {
    // store the pairing partners for each symbol
    var stack = {};
    for (var i = 0; i < pt[0]; i++) {
      stack[i] = [];
    }
    var seen = {};
    var res = "";
    var i;
    for (var i = 1; i < pt[0] + 1; i++) {
      if (pt[i] !== 0 && pt[i] in seen) {
        throw "Invalid pairtable contains duplicate entries";
      }
      seen[pt[i]] = true;
      if (pt[i] === 0) {
        res += '.';
      } else {
        if (pt[i] > i) {
          res += self.bracketLeft[self.insertIntoStack(stack, i, pt[i])];
        } else {
          res += self.bracketRight[self.deleteFromStack(stack, i)];
        }
      }
    }
    return res;
  };
  self.findUnmatched = function (pt, from, to) {
    /*
     * Find unmatched nucleotides in this molecule.
     */
    var toRemove = [];
    var unmatched = [];
    var origFrom = from;
    var origTo = to;
    var i;
    for (var i = from; i <= to; i++) if (pt[i] !== 0 && (pt[i] < from || pt[i] > to)) unmatched.push([i, pt[i]]);
    for (var i = origFrom; i <= origTo; i++) {
      while (pt[i] === 0 && i <= origTo) i++;
      to = pt[i];
      while (pt[i] === to) {
        i++;
        to--;
      }
      toRemove = toRemove.concat(self.findUnmatched(pt, i, to));
    }
    if (unmatched.length > 0) toRemove.push(unmatched);
    return toRemove;
  };
  self.removePseudoknotsFromPairtable = function (pt) {
    /* Remove the pseudoknots from this structure in such a fashion
     * that the least amount of base-pairs need to be broken
     *
     * The pairtable is manipulated in place and a list of tuples
     * indicating the broken base pairs is returned.
     */

    var mm = self.maximumMatching(pt);
    var newPt = self.backtrackMaximumMatching(mm, pt);
    var removed = [];
    for (var i = 1; i < pt.length; i++) {
      if (pt[i] < i) continue;
      if (newPt[i] != pt[i]) {
        removed.push([i, pt[i]]);
        pt[pt[i]] = 0;
        pt[i] = 0;
      }
    }
    return removed;
  };
  self.ptToElements = function (pt, level, i, j, dotBracketBreaks) {
    /* Convert a pair table to a list of secondary structure 
     * elements:
     *
     * [['s',1,[2,3]]
     *
     * The 's' indicates that an element can be a stem. It can also be
     * an interior loop ('i'), a hairpin loop ('h') or a multiloop ('m')
     *
     * The second number (1 in this case) indicates the depth or
     * how many base pairs have to be broken to get to this element.
     *
     * Finally, there is the list of nucleotides which are part of
     * of this element.
     */
    var elements = [];
    var u5 = [i - 1];
    var u3 = [j + 1];
    if (arguments.length < 5) dotBracketBreaks = [];
    if (i > j) return [];

    //iterate over the unpaired regions on either side
    //this is either 5' and 3' unpaired if level == 0
    //or an interior loop or a multiloop
    for (; pt[i] === 0; i++) {
      u5.push(i);
    }
    for (; pt[j] === 0; j--) {
      u3.push(j);
    }
    if (i > j) {
      //hairpin loop or one large unpaired molecule
      u5.push(i);
      if (level === 0) return [['e', level, u5.sort(numberSort)]];else {
        // check to see if we have chain breaks due
        // to multiple strands in the input
        var external = false;
        var left = [];
        var right = [];
        for (var k = 0; k < u5.length; k++) {
          if (external) right.push(u5[k]);else left.push(u5[k]);
          if (dotBracketBreaks.indexOf(u5[k]) >= 0) external = true;
        }
        if (external) {
          return [['h', level, u5.sort(numberSort)]];
        } else
          // if not, this is a simple hairpin loop
          return [['h', level, u5.sort(numberSort)]];
      }
    }
    if (pt[i] != j) {
      //multiloop
      var m = u5;
      var k = i;

      // the nucleotide before and the starting nucleotide
      m.push(k);
      while (k <= j) {
        // recurse into a stem
        elements = elements.concat(self.ptToElements(pt, level, k, pt[k], dotBracketBreaks));

        // add the nucleotides between stems
        m.push(pt[k]);
        k = pt[k] + 1;
        for (; pt[k] === 0 && k <= j; k++) {
          m.push(k);
        }
        m.push(k);
      }
      m.pop();
      m = m.concat(u3);
      if (m.length > 0) {
        if (level === 0) elements.push(['e', level, m.sort(numberSort)]);else elements.push(['m', level, m.sort(numberSort)]);
      }
      return elements;
    }
    if (pt[i] === j) {
      //interior loop
      u5.push(i);
      u3.push(j);
      var combined = u5.concat(u3);
      if (combined.length > 4) {
        if (level === 0) elements.push(['e', level, u5.concat(u3).sort(numberSort)]);else elements.push(['i', level, u5.concat(u3).sort(numberSort)]);
      }
    }
    var s = [];
    //go through the stem
    while (pt[i] === j && i < j) {
      //one stem
      s.push(i);
      s.push(j);
      i += 1;
      j -= 1;
      level += 1;
    }
    u5 = [i - 1];
    u3 = [j + 1];
    elements.push(['s', level, s.sort(numberSort)]);
    return elements.concat(self.ptToElements(pt, level, i, j, dotBracketBreaks));
  };
}
var rnaUtilities = new RNAUtilities();
function ColorScheme(colorsText) {
  var self = this;
  self.colorsText = colorsText;
  self.parseRange = function (rangeText) {
    //parse a number range such as 1-10 or 3,7,9 or just 7
    var parts = rangeText.split(',');
    var nums = [];
    for (var i = 0; i < parts.length; i++) {
      //could be 1 or 10-11  or something like that
      var parts1 = parts[i].split('-');
      if (parts1.length == 1) nums.push(parseInt(parts1[0]));else if (parts1.length == 2) {
        var from = parseInt(parts1[0]);
        var to = parseInt(parts1[1]);

        // add each number in this range
        for (var j = from; j <= to; j++) nums.push(j);
      } else {
        console.log('Malformed range (too many dashes):', rangeText);
      }
    }
    return nums;
  };
  self.parseColorText = function (colorText) {
    /* Parse the text of an RNA color string. Instructions and description
     * of the format are given below.
     *
     * The return is a json double dictionary indexed first by the 
     * molecule name, then by the nucleotide. This is then applied
     * by force.js to the RNAs it is displaying. When no molecule
     * name is specified, the color is applied to all molecules*/
    var lines = colorText.split('\n');
    var currMolecule = '';
    var counter = 1;
    var colorsJson = {
      colorValues: {
        '': {}
      },
      range: ['white', 'steelblue']
    };
    var domainValues = [];
    for (var i = 0; i < lines.length; i++) {
      if (lines[i][0] == '>') {
        // new molecule
        currMolecule = lines[i].trim().slice(1);
        counter = 1;
        colorsJson.colorValues[currMolecule] = {};
        continue;
      }
      var words = lines[i].trim().split(/[\s]+/);
      for (var j = 0; j < words.length; j++) {
        if (isNaN(words[j])) {
          if (words[j].search('range') === 0) {
            //there's a color scale in this entry
            var _parts = words[j].split('=');
            var partsRight = _parts[1].split(':');
            colorsJson.range = [partsRight[0], partsRight[1]];
            continue;
          }
          if (words[j].search('domain') == 0) {
            //there's a color scale in this entry
            var _parts2 = words[j].split('=');
            var _partsRight = _parts2[1].split(':');
            colorsJson.domain = [_partsRight[0], _partsRight[1]];
            continue;
          }

          // it's not a number, should be a combination 
          // of a number (nucleotide #) and a color
          var parts = words[j].split(':');
          var nums = self.parseRange(parts[0]);
          var color = parts[1];
          for (var k = 0; k < nums.length; k++) {
            if (isNaN(color)) {
              colorsJson.colorValues[currMolecule][nums[k]] = color;
            } else {
              colorsJson.colorValues[currMolecule][nums[k]] = +color;
              domainValues.push(Number(color));
            }
          }
        } else {
          //it's a number, so we add it to the list of values
          //seen for this molecule
          colorsJson.colorValues[currMolecule][counter] = Number(words[j]);
          counter += 1;
          domainValues.push(Number(words[j]));
        }
      }
    }
    if (!('domain' in colorsJson)) colorsJson.domain = [Math.min.apply(null, domainValues), Math.max.apply(null, domainValues)];
    self.colorsJson = colorsJson;
    return self;
  };
  self.normalizeColors = function () {
    /* 
     * Normalize the passed in values so that they range from
     * 0 to 1
     */
    var value;
    for (var moleculeName in self.colorsJson) {
      var minNum = Number.MAX_VALUE;
      var maxNum = Number.MIN_VALUE;

      // iterate once to find the min and max values;
      for (var resnum in self.colorsJson.colorValues[moleculeName]) {
        value = self.colorsJson.colorValues[moleculeName][resnum];
        if (typeof value == 'number') {
          if (value < minNum) minNum = value;
          if (value > maxNum) maxNum = value;
        }
      }

      // iterate again to normalize
      for (resnum in self.colorsJson.colorValues[moleculeName]) {
        value = self.colorsJson.colorValues[moleculeName][resnum];
        if (typeof value == 'number') {
          self.colorsJson.colorValues[moleculeName][resnum] = (value - minNum) / (maxNum - minNum);
        }
      }
    }
    return self;
  };
  self.parseColorText(self.colorsText);
  return self;
}
;// CONCATENATED MODULE: ./src/rnagraph.js


var rnagraph_numberSort = function numberSort(a, b) {
  return a - b;
};
if (typeof String.prototype.trim === 'undefined') {
  String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}
function rnagraph_ProteinGraph(structName, size, uid) {
  var self = this;
  self.type = 'protein';
  self.size = size;
  self.nodes = [{
    'name': 'P',
    'num': 1,
    'radius': 3 * Math.sqrt(size),
    'rna': self,
    'nodeType': 'protein',
    'structName': structName,
    'elemType': 'p',
    'size': size,
    'uid': slugid.nice()
  }];
  self.links = [];
  self.uid = slugid.nice();
  self.addUids = function (uids) {
    for (var i = 0; i < uids.length; i++) self.nodes[i].uid = uids[i];
    return self;
  };
  self.getUids = function () {
    /* Get the positions of each node so that they
     * can be passed to elementsToJson later
     */
    uids = [];
    for (var i = 0; i < self.dotbracket.length; i++) uids.push(self.nodes[i].uid);
    return uids;
  };
}
function RNAGraph() {
  var seq = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var dotbracket = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var structName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var startNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var self = this;
  self.type = 'rna';
  self.circularizeExternal = false;
  self.seq = seq;
  self.dotbracket = dotbracket; //i.e. ..((..))..
  self.structName = structName;
  self.circular = false;
  if (self.dotbracket.slice(-1) == '*') {
    //circular RNA
    self.dotbracket = self.dotbracket.slice(0, -1);
    self.circular = true;
  }
  self.uid = node_modules_slugid.nice();
  self.elements = []; //store the elements and the
  //nucleotides they contain
  self.pseudoknotPairs = [];
  self.nucsToNodes = {};
  self.addUids = function (uids) {
    var nucleotideNodes = self.nodes.filter(function (d) {
      return d.nodeType == 'nucleotide';
    });
    for (var i = 0; i < uids.length && i < nucleotideNodes.length; i++) {
      nucleotideNodes[i].uid = uids[i];
    }
    return self;
  };
  self.computePairtable = function () {
    self.pairtable = rnaUtilities.dotbracketToPairtable(self.dotbracket);
  };
  self.removeBreaks = function (targetString) {
    // Remove all chain breaks (denoted with a '&', which indicate
    // that the input represents more than one strand)
    var breaks = [];
    var breakIndex = -1;
    while ((breakIndex = targetString.indexOf('&')) >= 0) {
      breaks.push(breakIndex);
      targetString = targetString.substring(0, breakIndex) + targetString.substring(breakIndex + 1, targetString.length);
    }
    return {
      targetString: targetString,
      breaks: breaks
    };
  };
  var ret = self.removeBreaks(self.dotbracket);
  self.dotbracket = ret.targetString;
  self.dotBracketBreaks = ret.breaks;
  ret = self.removeBreaks(self.seq);
  self.seq = ret.targetString;
  self.seqBreaks = ret.breaks;
  self.rnaLength = self.dotbracket.length;
  if (!arraysEqual(self.dotBracketBreaks, self.seqBreaks)) {
    console.log('WARNING: Sequence and structure breaks not equal');
    console.log('WARNING: Using the breaks in the structure');
  }
  self.computePairtable();
  self.addPositions = function (nodeType, positions) {
    var labelNodes = self.nodes.filter(function (d) {
      return d.nodeType == nodeType;
    });
    for (var i = 0; i < labelNodes.length; i++) {
      labelNodes[i].x = positions[i][0];
      labelNodes[i].y = positions[i][1];
    }
    return self;
  };
  self.breakNodesToFakeNodes = function () {
    // convert all the nodes following breaks to fake nodes
    var labelNodes = self.nodes.filter(function (d) {
      return d.nodeType == 'nucleotide';
    });

    // if a node was an artifical break node, convert it to a middle
    for (var i = 0; i < labelNodes.length; i++) {
      if (self.dotBracketBreaks.indexOf(i) >= 0) {
        labelNodes[i].nodeType = 'middle';
        labelNodes[i + 1].nodeType = 'middle';
      }
    }
    var _loop = function _loop(_i) {
      broken = false; // change the elemType of the other nodes in the element containing
      // the break
      for (var j = 0; j < self.elements[_i][2].length; j++) {
        if (self.dotBracketBreaks.indexOf(self.elements[_i][2][j]) >= 0) broken = true;
      }
      if (broken) {
        self.elements[_i][2].map(function (x) {
          if (x == 0) return;
          self.nodes[x - 1].elemType = 'e';
        });
      } else {
        self.elements[_i][2].map(function (x) {
          if (x == 0) return;
          self.nodes[x - 1].elemType = self.elements[_i][0];
        });
      }
    };
    for (var _i = 0; _i < self.elements.length; _i++) {
      var broken;
      _loop(_i);
    }
    return self;
  };
  self.getPositions = function (nodeType) {
    var positions = [];
    var nucleotideNodes = self.nodes.filter(function (d) {
      return d.nodeType == nodeType;
    });
    for (var i = 0; i < nucleotideNodes.length; i++) positions.push([nucleotideNodes[i].x, nucleotideNodes[i].y]);
    return positions;
  };
  self.getUids = function () {
    /* Get the positions of each node so that they
     * can be passed to elementsToJson later
     */
    var uids = [];
    for (var i = 0; i < self.dotbracket.length; i++) uids.push(self.nodes[i].uid);
    return uids;
  };
  self.reinforceStems = function () {
    var pt = self.pairtable;
    var relevantElements = self.elements.filter(function (d) {
      return d[0] == 's' && d[2].length >= 4;
    });
    for (var i = 0; i < relevantElements.length; i++) {
      var allNucs = relevantElements[i][2];
      var _nucs = allNucs.slice(0, allNucs.length / 2);
      for (var j = 0; j < _nucs.length - 1; j++) {
        self.addFakeNode([_nucs[j], _nucs[j + 1], pt[_nucs[j + 1]], pt[_nucs[j]]]);
      }
    }
    return self;
  };
  self.reinforceLoops = function () {
    /*
     * Add a set of fake nodes to enforce the structure
     */
    var filterNucs = function filterNucs(d) {
      return d !== 0 && d <= self.dotbracket.length;
    };
    for (var i = 0; i < self.elements.length; i++) {
      if (self.elements[i][0] == 's' || !self.circularizeExternal && self.elements[i][0] == 'e') continue;
      var nucs = self.elements[i][2].filter(filterNucs);
      if (self.elements[i][0] == 'e') {
        var newNode1 = {
          'name': '',
          'num': -3,
          //'radius': 18 * radius -6,
          'radius': 0,
          'rna': self,
          'nodeType': 'middle',
          'elemType': 'f',
          'nucs': [],
          'x': self.nodes[self.rnaLength - 1].x,
          'y': self.nodes[self.rnaLength - 1].y,
          'px': self.nodes[self.rnaLength - 1].px,
          'py': self.nodes[self.rnaLength - 1].py,
          'uid': node_modules_slugid.nice()
        };
        var newNode2 = {
          'name': '',
          'num': -2,
          //'radius': 18 * radius -6,
          'radius': 0,
          'rna': self,
          'nodeType': 'middle',
          'elemType': 'f',
          'nucs': [],
          'x': self.nodes[0].x,
          'y': self.nodes[0].y,
          'px': self.nodes[0].px,
          'py': self.nodes[0].py,
          'uid': node_modules_slugid.nice()
        };
        nucs.push(self.nodes.length + 1);
        nucs.push(self.nodes.length + 2);
        self.nodes.push(newNode1);
        self.nodes.push(newNode2);
      }
      self.addFakeNode(nucs);
    }
    return self;
  };
  self.updateLinkUids = function () {
    for (var i = 0; i < self.links.length; i++) {
      self.links[i].uid = self.links[i].source.uid + self.links[i].target.uid;
    }
    return self;
  };
  self.addFakeNode = function (nucs) {
    var linkLength = 18; //make sure this is consistent with the value in force.js
    var nodeWidth = 6;
    var angle = 3.1415 * 2 / (2 * nucs.length);
    var radius = linkLength / (2 * Math.tan(angle));
    var fakeNodeUid = '';
    for (var i = 0; i < nucs.length; i++) fakeNodeUid += self.nodes[nucs[i] - 1].uid;
    var newNode = {
      'name': '',
      'num': -1,
      //'radius': 18 * radius -6,
      'radius': radius,
      'rna': self,
      'nodeType': 'middle',
      'elemType': 'f',
      'nucs': nucs,
      'uid': fakeNodeUid
    };
    self.nodes.push(newNode);
    var newX = 0;
    var newY = 0;
    var coordsCounted = 0;
    angle = (nucs.length - 2) * 3.14159 / (2 * nucs.length);
    radius = 0.5 / Math.cos(angle);
    for (var j = 0; j < nucs.length; j++) {
      if (nucs[j] === 0 || nucs[j] > self.dotbracket.length) continue;

      //link to the center node
      self.links.push({
        'source': self.nodes[nucs[j] - 1],
        'target': self.nodes[self.nodes.length - 1],
        'linkType': 'fake',
        'value': radius,
        'uid': node_modules_slugid.nice()
      });
      if (nucs.length > 4) {
        //link across the loop
        self.links.push({
          'source': self.nodes[nucs[j] - 1],
          'target': self.nodes[nucs[(j + Math.floor(nucs.length / 2)) % nucs.length] - 1],
          'linkType': 'fake',
          'value': radius * 2,
          'uid': node_modules_slugid.nice()
        });
      }
      var ia = (nucs.length - 2) * 3.14159 / nucs.length;
      var c = 2 * Math.cos(3.14159 / 2 - ia / 2);
      //link to over-neighbor
      self.links.push({
        'source': self.nodes[nucs[j] - 1],
        'target': self.nodes[nucs[(j + 2) % nucs.length] - 1],
        'linkType': 'fake',
        'value': c
      });

      // calculate the mean of the coordinats in this loop
      // and place the fake node there
      var fromNode = self.nodes[nucs[j] - 1];
      if ('x' in fromNode) {
        newX += fromNode.x;
        newY += fromNode.y;
        coordsCounted += 1;
      }
    }
    if (coordsCounted > 0) {
      // the nucleotides had set positions so we can calculate the position
      // of the fake node
      newNode.x = newX / coordsCounted;
      newNode.y = newY / coordsCounted;
      newNode.px = newNode.x;
      newNode.py = newNode.y;
    }
    return self;
  };
  self.connectFakeNodes = function () {
    var linkLength = 18;

    // We want to be able to connect all of the fake nodes
    // and create a structure consisting of just them
    var filterOutNonFakeNodes = function filterOutNonFakeNodes(d) {
      return d.nodeType == 'middle';
    };
    var nucsToNodes = {};
    var fakeNodes = self.nodes.filter(filterOutNonFakeNodes);
    var linked = {};

    // initialize the nucleotides to nodes
    for (var i = 1; i <= self.nodes.length; i++) nucsToNodes[i] = [];
    for (var i = 0; i < fakeNodes.length; i++) {
      var thisNode = fakeNodes[i];

      // each fake node represents a certain set of nucleotides (thisNode.nucs)
      for (var j = 0; j < thisNode.nucs.length; j++) {
        var thisNuc = thisNode.nucs[j];

        // check to see if this nucleotide has been seen in another fake node
        // if it has, then we add a link between the two nodes
        for (var k = 0; k < nucsToNodes[thisNuc].length; k++) {
          if (JSON.stringify([nucsToNodes[thisNuc][k].uid, thisNode.uid].sort()) in linked) continue; //already linked

          var distance = nucsToNodes[thisNuc][k].radius + thisNode.radius;
          self.links.push({
            'source': nucsToNodes[thisNuc][k],
            'target': thisNode,
            'value': distance / linkLength,
            'linkType': 'fake_fake'
          });

          // note that we've already seen this link
          linked[JSON.stringify([nucsToNodes[thisNuc][k].uid, thisNode.uid].sort())] = true;
        }
        nucsToNodes[thisNuc].push(thisNode);
      }
    }
    return self;
  };
  self.addExtraLinks = function (extraLinks) {
    if (typeof extraLinks == 'undefined') return self;
    for (var i = 0; i < extraLinks.length; i++) {
      var source = self.getNodeFromNucleotides(extraLinks[i].from);
      var target = self.getNodeFromNucleotides(extraLinks[i].to);
      var newLink = {
        'source': source,
        'target': target,
        'linkType': 'extra',
        'extraLinkType': extraLinks[i].linkType,
        'uid': node_modules_slugid.nice()
      };
      self.links.push(newLink);
    }
    return self;
  };
  self.elementsToJson = function () {
    /* Convert a set of secondary structure elements to a json
     * representation of the graph that can be used with d3's
     * force-directed layout to generate a visualization of
     * the structure.
     */
    var pt = self.pairtable;
    var elements = self.elements;
    self.nodes = [];
    self.links = [];

    //create a reverse lookup so we can find out the type
    //of element that a node is part of
    var elemTypes = {};

    //sort so that we count stems last
    self.elements.sort();
    for (var i = 0; i < self.elements.length; i++) {
      var nucs = self.elements[i][2];
      for (var j = 0; j < nucs.length; j++) {
        elemTypes[nucs[j]] = self.elements[i][0];
      }
    }
    for (var _i2 = 1; _i2 <= pt[0]; _i2++) {
      var nodeName = self.seq[_i2 - 1];
      if (self.dotBracketBreaks.indexOf(_i2 - 1) >= 0 || self.dotBracketBreaks.indexOf(_i2 - 2) >= 0) {
        nodeName = '';
      }

      //create a node for each nucleotide
      self.nodes.push({
        'name': nodeName,
        'num': startNumber + _i2 - 1,
        'radius': 5,
        'rna': self,
        'nodeType': 'nucleotide',
        'structName': self.structName,
        'elemType': elemTypes[_i2],
        'uid': node_modules_slugid.nice(),
        'linked': false
      });
    }
    for (var _i3 = 0; _i3 < self.nodes.length; _i3++) {
      if (_i3 === 0) self.nodes[_i3].prevNode = null;else {
        self.nodes[_i3].prevNode = self.nodes[_i3 - 1];
      }
      if (_i3 == self.nodes.length - 1) self.nodes[_i3].nextNode = null;else {
        self.nodes[_i3].nextNode = self.nodes[_i3 + 1];
      }
    }
    for (var _i4 = 1; _i4 <= pt[0]; _i4++) {
      if (pt[_i4] !== 0) {
        // base-pair links
        self.links.push({
          'source': self.nodes[_i4 - 1],
          'target': self.nodes[pt[_i4] - 1],
          'linkType': 'basepair',
          'value': 1,
          'uid': node_modules_slugid.nice()
        });
      }
      if (_i4 > 1) {
        // backbone links
        if (self.dotBracketBreaks.indexOf(_i4 - 1) === -1 && self.dotBracketBreaks.indexOf(_i4 - 2) == -1 && self.dotBracketBreaks.indexOf(_i4 - 3) == -1) {
          // there is no break in the strands here
          // we can add a backbone link
          self.links.push({
            'source': self.nodes[_i4 - 2],
            'target': self.nodes[_i4 - 1],
            'linkType': 'backbone',
            'value': 1,
            'uid': node_modules_slugid.nice()
          });
          self.nodes[_i4 - 1].linked = true;
        }
      }
    }

    //add the pseudoknot links
    for (var _i5 = 0; _i5 < self.pseudoknotPairs.length; _i5++) {
      self.links.push({
        'source': self.nodes[self.pseudoknotPairs[_i5][0] - 1],
        'target': self.nodes[self.pseudoknotPairs[_i5][1] - 1],
        'linkType': 'pseudoknot',
        'value': 1,
        'uid': node_modules_slugid.nice()
      });
    }
    if (self.circular) {
      self.links.push({
        'source': self.nodes[0],
        'target': self.nodes[self.rnaLength - 1],
        'linkType': 'backbone',
        'value': 1,
        'uid': node_modules_slugid.nice()
      });
    }
    return self;
  };
  self.ptToElements = function (pt, level, i, j) {
    /* Convert a pair table to a list of secondary structure
     * elements:
     *
     * [['s',1,[2,3]]
     *
     * The 's' indicates that an element can be a stem. It can also be
     * an interior loop ('i'), a hairpin loop ('h') or a multiloop ('m')
     *
     * The second number (1 in this case) indicates the depth or
     * how many base pairs have to be broken to get to this element.
     *
     * Finally, there is the list of nucleotides which are part of
     * of this element.
     */
    var elements = [];
    var u5 = [i - 1];
    var u3 = [j + 1];
    if (i > j) return [];

    //iterate over the unpaired regions on either side
    //this is either 5' and 3' unpaired if level == 0
    //or an interior loop or a multiloop
    for (; pt[i] === 0; i++) {
      u5.push(i);
    }
    for (; pt[j] === 0; j--) {
      u3.push(j);
    }
    if (i > j) {
      //hairpin loop or one large unpaired molecule
      u5.push(i);
      if (level === 0) return [['e', level, u5.sort(rnagraph_numberSort)]];else {
        // check to see if we have chain breaks due
        // to multiple strands in the input
        var external = false;
        var left = [];
        var right = [];
        for (var k = 0; k < u5.length; k++) {
          if (external) right.push(u5[k]);else left.push(u5[k]);
          if (self.dotBracketBreaks.indexOf(u5[k]) >= 0) external = true;
        }
        if (external) {
          return [['h', level, u5.sort(rnagraph_numberSort)]];
        } else
          // if not, this is a simple hairpin loop
          return [['h', level, u5.sort(rnagraph_numberSort)]];
      }
    }
    if (pt[i] != j) {
      //multiloop
      var m = u5;
      var k = i;

      // the nucleotide before and the starting nucleotide
      m.push(k);
      while (k <= j) {
        // recurse into a stem
        elements = elements.concat(self.ptToElements(pt, level, k, pt[k]));

        // add the nucleotides between stems
        m.push(pt[k]);
        k = pt[k] + 1;
        for (; pt[k] === 0 && k <= j; k++) {
          m.push(k);
        }
        m.push(k);
      }
      m.pop();
      m = m.concat(u3);
      if (m.length > 0) {
        if (level === 0) elements.push(['e', level, m.sort(rnagraph_numberSort)]);else elements.push(['m', level, m.sort(rnagraph_numberSort)]);
      }
      return elements;
    }
    if (pt[i] === j) {
      //interior loop
      u5.push(i);
      u3.push(j);
      var combined = u5.concat(u3);
      if (combined.length > 4) {
        if (level === 0) elements.push(['e', level, u5.concat(u3).sort(rnagraph_numberSort)]);else elements.push(['i', level, u5.concat(u3).sort(rnagraph_numberSort)]);
      }
    }
    var s = [];
    //go through the stem
    while (pt[i] === j && i < j) {
      //one stem
      s.push(i);
      s.push(j);
      i += 1;
      j -= 1;
      level += 1;
    }
    u5 = [i - 1];
    u3 = [j + 1];
    elements.push(['s', level, s.sort(rnagraph_numberSort)]);
    return elements.concat(self.ptToElements(pt, level, i, j));
  };
  self.addLabels = function () {
    var startNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var labelInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    if (labelInterval === 0) return self;
    for (var i = 1; i <= self.rnaLength; i++) {
      // add labels
      if (i % labelInterval === 0) {
        //create a node for each label
        var newX = void 0,
          newY = void 0;
        var thisNode = self.nodes[i - 1];
        var prevNode = void 0,
          nextNode = void 0;
        var prevVec = void 0,
          nextVec = void 0;
        if (self.rnaLength == 1) {
          nextVec = [thisNode.x - 15, thisNode.y];
          prevVec = [thisNode.x - 15, thisNode.y];
        } else {
          // if we're labelling the first node, then label it in relation to the last
          if (i == 1) prevNode = self.nodes[self.rnaLength - 1];else prevNode = self.nodes[i - 2];

          // if we're labelling the last node, then label it in relation to the first
          if (i == self.rnaLength) nextNode = self.nodes[0];else nextNode = self.nodes[i];

          // this nucleotide and its neighbors are paired
          if (self.pairtable[nextNode.num - startNumber + 1] !== 0 && self.pairtable[prevNode.num - startNumber + 1] !== 0 && self.pairtable[thisNode.num - startNumber + 1] !== 0) {
            prevNode = nextNode = self.nodes[self.pairtable[thisNode.num - startNumber + 1] - 1];
          }

          // this node is paired but at least one of its neighbors is unpaired
          // place the label in the direction of the two neighbors
          if (self.pairtable[thisNode.num - startNumber + 1] !== 0 && (self.pairtable[nextNode.num - startNumber + 1] === 0 || self.pairtable[prevNode.num - startNumber + 1] === 0)) {
            nextVec = [thisNode.x - nextNode.x, thisNode.y - nextNode.y];
            prevVec = [thisNode.x - prevNode.x, thisNode.y - prevNode.y];
          } else {
            nextVec = [nextNode.x - thisNode.x, nextNode.y - thisNode.y];
            prevVec = [prevNode.x - thisNode.x, prevNode.y - thisNode.y];
          }
        }
        var combinedVec = [nextVec[0] + prevVec[0], nextVec[1] + prevVec[1]];
        var vecLength = Math.sqrt(combinedVec[0] * combinedVec[0] + combinedVec[1] * combinedVec[1]);
        var normedVec = [combinedVec[0] / vecLength, combinedVec[1] / vecLength];
        var offsetVec = [-15 * normedVec[0], -15 * normedVec[1]];
        newX = self.nodes[i - 1].x + offsetVec[0];
        newY = self.nodes[i - 1].y + offsetVec[1];
        var newNode = {
          'name': i + startNumber - 1,
          'num': -1,
          'radius': 6,
          'rna': self,
          'nodeType': 'label',
          'structName': self.structName,
          'elemType': 'l',
          'x': newX,
          'y': newY,
          'px': newX,
          'py': newY,
          'uid': node_modules_slugid.nice()
        };
        var newLink = {
          'source': self.nodes[i - 1],
          'target': newNode,
          'value': 1,
          'linkType': 'label_link',
          'uid': node_modules_slugid.nice()
        };
        self.nodes.push(newNode);
        self.links.push(newLink);
      }
    }
    return self;
  };
  self.recalculateElements = function () {
    self.removePseudoknots();
    self.elements = self.ptToElements(self.pairtable, 0, 1, self.dotbracket.length);
    if (self.circular) {
      //check to see if the external loop is a hairpin or a multiloop
      var externalLoop = self.elements.filter(function (d) {
        if (d[0] == 'e') return true;
      });
      if (externalLoop.length > 0) {
        eloop = externalLoop[0];
        nucs = eloop[2].sort(rnagraph_numberSort);
        prev = nucs[0];
        hloop = true;
        numGreater = 0;
        for (var i = 1; i < nucs.length; i++) {
          if (nucs[i] - prev > 1) {
            numGreater += 1;
          }
          prev = nucs[i];
        }
        if (numGreater == 1) {
          eloop[0] = 'h';
        } else if (numGreater == 2) {
          eloop[0] = 'i';
        } else {
          eloop[0] = 'm';
        }
      }
    }
    return self;
  };
  self.reassignLinkUids = function () {
    // reassign uids to the links, corresponding to the uids of the two nodes
    // they connect
    var i;
    for (var i = 0; i < self.links.length; i++) {
      self.links[i].uid = self.links[i].source.uid + self.links[i].target.uid;
    }
    return self;
  };
  self.removePseudoknots = function () {
    if (self.pairtable.length > 1) self.pseudoknotPairs = self.pseudoknotPairs.concat(rnaUtilities.removePseudoknotsFromPairtable(self.pairtable));
    return self;
  };
  self.addPseudoknots = function () {
    /* Add all of the pseudoknot pairs which are stored outside
     * of the pairtable back to the pairtable
     */
    var pt = self.pairtable;
    var pseudoknotPairs = self.pseudoknotPairs;
    for (var i = 0; i < pseudoknotPairs.length; i++) {
      pt[pseudoknotPairs[i][0]] = pseudoknotPairs[i][1];
      pt[pseudoknotPairs[i][1]] = pseudoknotPairs[i][0];
    }
    self.pseudoknotPairs = [];
    return self;
  };
  self.addName = function (name) {
    if (typeof name == 'undefined') {
      self.name = '';
      return self;
    } else {
      self.name = name;
      return self;
    }
  };
  if (self.rnaLength > 0) self.recalculateElements();
  self.getNodeFromNucleotides = function (nucs) {
    /* Get a node given a nucleotide number or an array of nucleotide
     * numbers indicating an element node */
    if (Object.prototype.toString.call(nucs) === '[object Array]') {
      for (var j = 0; j < self.nodes.length; j++) {
        if ('nucs' in self.nodes[j]) {
          if (self.nodes[j].nucs.equals(nucs)) {
            return self.nodes[j];
          }
        }
      }
    } else {
      for (var _j = 0; _j < self.nodes.length; _j++) {
        if (self.nodes[_j].num == nucs) {
          return self.nodes[_j];
        }
      }
    }
    console.log('ERROR: No node found for nucs:', nucs);
    return null;
  };
}
function moleculesToJson(moleculesJson) {
  /* Convert a list of RNA and protein molecules to a list of RNAGraph
   * ProteinGraph and extraLinks structure */

  var nodes = {}; //index the nodes by uid
  var graphs = [];
  var extraLinks = [];

  // Create the graphs for each molecule
  for (var i = 0; i < moleculesJson.molecules.length; i++) {
    var molecule = moleculesJson.molecules[i];
    var rg;
    if (molecule.type == 'rna') {
      rg = new RNAGraph(molecule.seq, molecule.ss, molecule.header);
      rg.circularizeExternal = true;
      rg.elementsToJson().addPositions('nucleotide', molecule.positions).addLabels().reinforceStems().reinforceLoops();
    } else if (molecule.type == 'protein') {
      rg = new rnagraph_ProteinGraph(molecule.header, molecule.size);
    }
    rg.addUids(molecule.uids);
    for (var j = 0; j < rg.nodes.length; j++) {
      nodes[rg.nodes[j].uid] = rg.nodes[j];
    }
    graphs.push(rg);
  }

  //Add the extra links
  for (var i = 0; i < moleculesJson.extraLinks.length; i++) {
    link = moleculesJson.extraLinks[i];
    link.source = nodes[link.source];
    link.target = nodes[link.target];
    link.uid = slugid.nice();
    extraLinks.push(link);
  }
  return {
    'graphs': graphs,
    'extraLinks': extraLinks
  };
}
;
;// CONCATENATED MODULE: ./src/simplernaplot.js
function simpleXyCoordinates(pair_table) {
  var INIT_ANGLE = 0.; /* initial bending angle */
  var INIT_X = 100.; /* coordinate of first digit */
  var INIT_Y = 100.; /* see above */
  var RADIUS = 15.;
  var x = [],
    y = [];
  var i, len;
  var alpha;
  len = pair_table[0];
  var angle = Array.apply(null, new Array(len + 5)).map(Number.prototype.valueOf, 0);
  var loop_size = Array.apply(null, new Array(16 + Math.floor(len / 5))).map(Number.prototype.valueOf, 0);
  var stack_size = Array.apply(null, new Array(16 + Math.floor(len / 5))).map(Number.prototype.valueOf, 0);
  var lp = 0;
  var stk = 0;
  var PIHALF = Math.PI / 2;
  var loop = function loop(i, j, pair_table)
  /* i, j are the positions AFTER the last pair of a stack; i.e
     i-1 and j+1 are paired. */
  {
    var count = 2; /* counts the VERTICES of a loop polygon; that's
                      NOT necessarily the number of unpaired bases!
                      Upon entry the loop has already 2 vertices, namely
                      the pair i-1/j+1.  */

    var r = 0,
      bubble = 0; /* bubble counts the unpaired digits in loops */

    var i_old, partner, k, l, start_k, start_l, fill, ladder;
    var begin, v, diff;
    var polygon;
    var remember = Array.apply(null, new Array(3 + Math.floor((j - i) / 5) * 2)).map(Number.prototype.valueOf, 0);
    i_old = i - 1, j++; /* j has now been set to the partner of the
                           previous pair for correct while-loop
                           termination.  */
    while (i != j) {
      partner = pair_table[i];
      if (!partner || i == 0) i++, count++, bubble++;else {
        count += 2;
        k = i, l = partner; /* beginning of stack */
        remember[++r] = k;
        remember[++r] = l;
        i = partner + 1; /* next i for the current loop */

        start_k = k, start_l = l;
        ladder = 0;
        do {
          k++, l--, ladder++; /* go along the stack region */
        } while (pair_table[k] == l && pair_table[k] > k);
        fill = ladder - 2;
        if (ladder >= 2) {
          angle[start_k + 1 + fill] += PIHALF; /*  Loop entries and    */
          angle[start_l - 1 - fill] += PIHALF; /*  exits get an        */
          angle[start_k] += PIHALF; /*  additional PI/2.    */
          angle[start_l] += PIHALF; /*  Why ? (exercise)    */
          if (ladder > 2) {
            for (; fill >= 1; fill--) {
              angle[start_k + fill] = Math.PI; /*  fill in the angles  */
              angle[start_l - fill] = Math.PI; /*  for the backbone    */
            }
          }
        }

        stack_size[++stk] = ladder;
        if (k <= l) loop(k, l, pair_table);
      }
    }
    polygon = Math.PI * (count - 2) / count; /* bending angle in loop polygon */
    remember[++r] = j;
    begin = i_old < 0 ? 0 : i_old;
    for (v = 1; v <= r; v++) {
      diff = remember[v] - begin;
      for (fill = 0; fill <= diff; fill++) angle[begin + fill] += polygon;
      if (v > r) break;
      begin = remember[++v];
    }
    loop_size[++lp] = bubble;
  };
  loop(0, len + 1, pair_table);
  loop_size[lp] -= 2; /* correct for cheating with function loop */

  alpha = INIT_ANGLE;
  x[0] = INIT_X;
  y[0] = INIT_Y;
  var poss = [];
  poss.push([x[0], y[0]]);
  for (i = 1; i < len; i++) {
    x[i] = x[i - 1] + RADIUS * Math.cos(alpha);
    y[i] = y[i - 1] + RADIUS * Math.sin(alpha);
    poss.push([x[i], y[i]]);
    alpha += Math.PI - angle[i + 1];
  }
  return poss;
}
;// CONCATENATED MODULE: ./src/naview/radloop.js
function Radloop() {
  this.radius = null;
  this.loopnumber = null;
  this.next = null;
  this.prev = null;
}
Radloop.prototype.getRadius = function () {
  return this.radius;
};
Radloop.prototype.setRadius = function (radius) {
  this.radius = radius;
};
Radloop.prototype.getLoopnumber = function () {
  return this.loopnumber;
};
Radloop.prototype.setLoopnumber = function (loopnumber) {
  this.loopnumber = loopnumber;
};
Radloop.prototype.getNext = function () {
  return this.next;
};
Radloop.prototype.setNext = function (next) {
  this.next = next;
};
Radloop.prototype.getPrev = function () {
  return this.prev;
};
Radloop.prototype.setPrev = function (prev) {
  this.prev = prev;
};
// EXTERNAL MODULE: ./src/naview/connection.js
var connection = __webpack_require__(953);
// EXTERNAL MODULE: ./src/naview/region.js
var region = __webpack_require__(75);
;// CONCATENATED MODULE: ./src/naview/base.js

function Base() {
  this.mate = null;
  this.x = null;
  this.y = null;
  this.extracted = null;
  this.region = new region/* Region */.y();
}
Base.prototype.getMate = function () {
  return this.mate;
};
Base.prototype.setMate = function (mate) {
  this.mate = mate;
};
Base.prototype.getX = function () {
  return this.x;
};
Base.prototype.setX = function (x) {
  this.x = x;
};
Base.prototype.getY = function () {
  return this.y;
};
Base.prototype.setY = function (y) {
  this.y = y;
};
Base.prototype.isExtracted = function () {
  return this.extracted;
};
Base.prototype.setExtracted = function (extracted) {
  this.extracted = extracted;
};
Base.prototype.getRegion = function () {
  return this.region;
};
Base.prototype.setRegion = function (region) {
  this.region = region;
};
// EXTERNAL MODULE: ./src/naview/loop.js
var loop = __webpack_require__(724);
;// CONCATENATED MODULE: ./src/naview/naview.js





function NAView() {
  this.ANUM = 9999.0;
  this.MAXITER = 500;
  this.bases = [];
  this.nbase = null;
  this.nregion = null;
  this.loop_count = null;
  this.root = new loop/* Loop */.r();
  this.loops = [];
  this.regions = [];
  this.rlphead = new Radloop();
  this.lencut = 0.8;
  this.RADIUS_REDUCTION_FACTOR = 1.4;

  // show algorithm step by step
  this.angleinc = null;
  this._h = null;

  // private boolean noIterationFailureYet = true;

  this.HELIX_FACTOR = 0.6;
  this.BACKBONE_DISTANCE = 27;
}
NAView.prototype.naview_xy_coordinates = function (pair_table) {
  var x = [];
  var y = [];
  if (pair_table.length === 0 || pair_table[0] === 0) {
    return 0;
  }
  var i;
  this.nbase = pair_table[0];
  this.bases = [];
  for (var index = 0; index < this.nbase + 1; index++) {
    this.bases.push(new Base());
  }
  this.regions = [];
  for (var index = 0; index < this.nbase + 1; index++) {
    this.regions.push(new region/* Region */.y());
  }
  this.read_in_bases(pair_table);
  this.rlphead = null;
  this.find_regions();
  this.loop_count = 0;
  this.loops = [];
  for (var index = 0; index < this.nbase + 1; index++) {
    this.loops.push(new loop/* Loop */.r());
  }
  this.construct_loop(0);
  this.find_central_loop();
  this.traverse_loop(this.root, null);
  for (i = 0; i < this.nbase; i++) {
    x.push(100 + this.BACKBONE_DISTANCE * this.bases[i + 1].getX());
    y.push(100 + this.BACKBONE_DISTANCE * this.bases[i + 1].getY());
  }
  return {
    nbase: this.nbase,
    x: x,
    y: y
  };
};
NAView.prototype.read_in_bases = function read_in_bases(pair_table) {
  var i = null;
  var npairs = null;

  // Set up an origin.
  this.bases.push(new Base());
  this.bases[0].setMate(0);
  this.bases[0].setExtracted(false);
  this.bases[0].setX(this.ANUM);
  this.bases[0].setY(this.ANUM);
  for (npairs = 0, i = 1; i <= this.nbase; i++) {
    this.bases.push(new Base());
    this.bases[i].setExtracted(false);
    this.bases[i].setX(this.ANUM);
    this.bases[i].setY(this.ANUM);
    this.bases[i].setMate(pair_table[i]);
    if (pair_table[i] > i) npairs++;
  }
  // must have at least 1 pair to avoid segfault
  if (npairs == 0) {
    this.bases[1].setMate(this.nbase);
    this.bases[this.nbase].setMate(1);
  }
};
NAView.prototype.find_regions = function find_regions() {
  var i = null;
  var mate = null;
  var nb1 = null;
  nb1 = this.nbase + 1;
  var mark = [];
  for (i = 0; i < nb1; i++) {
    mark.push(false);
  }
  this.nregion = 0;
  for (i = 0; i <= this.nbase; i++) {
    if ((mate = this.bases[i].getMate()) != 0 && !mark[i]) {
      this.regions[this.nregion].setStart1(i);
      this.regions[this.nregion].setEnd2(mate);
      mark[i] = true;
      mark[mate] = true;
      this.bases[i].setRegion(this.regions[this.nregion]);
      this.bases[mate].setRegion(this.regions[this.nregion]);
      for (i++, mate--; i < mate && this.bases[i].getMate() == mate; i++, mate--) {
        mark[mate] = true;
        mark[i] = true;
        this.bases[i].setRegion(this.regions[this.nregion]);
        this.bases[mate].setRegion(this.regions[this.nregion]);
      }
      this.regions[this.nregion].setEnd1(--i);
      this.regions[this.nregion].setStart2(mate + 1);
      this.nregion++;
    }
  }
};
NAView.prototype.construct_loop = function construct_loop(ibase) {
  var i = null;
  var mate = null;
  var retloop = new loop/* Loop */.r();
  var lp = new loop/* Loop */.r();
  var cp = new connection.Connection();
  var rp = new region/* Region */.y();
  var rlp = new Radloop();
  retloop = this.loops[this.loop_count++];
  retloop.setNconnection(0);
  retloop.setDepth(0);
  retloop.setNumber(this.loop_count);
  retloop.setRadius(0.0);
  for (rlp = this.rlphead; rlp != null; rlp = rlp.getNext()) if (rlp.getLoopnumber() == this.loop_count) retloop.setRadius(rlp.getRadius());
  i = ibase;
  do {
    if ((mate = this.bases[i].getMate()) != 0) {
      rp = this.bases[i].getRegion();
      if (!this.bases[rp.getStart1()].isExtracted()) {
        if (i == rp.getStart1()) {
          this.bases[rp.getStart1()].setExtracted(true);
          this.bases[rp.getEnd1()].setExtracted(true);
          this.bases[rp.getStart2()].setExtracted(true);
          this.bases[rp.getEnd2()].setExtracted(true);
          lp = this.construct_loop(rp.getEnd1() < this.nbase ? rp.getEnd1() + 1 : 0);
        } else if (i == rp.getStart2()) {
          this.bases[rp.getStart2()].setExtracted(true);
          this.bases[rp.getEnd2()].setExtracted(true);
          this.bases[rp.getStart1()].setExtracted(true);
          this.bases[rp.getEnd1()].setExtracted(true);
          lp = this.construct_loop(rp.getEnd2() < this.nbase ? rp.getEnd2() + 1 : 0);
        } else {
          console.log("Something went terribly wrong ....");
        }
        retloop.setNconnection(retloop.getNconnection() + 1);
        cp = new connection.Connection();
        retloop.setConnection(retloop.getNconnection() - 1, cp);
        retloop.setConnection(retloop.getNconnection(), null);
        cp.setLoop(lp);
        cp.setRegion(rp);
        if (i == rp.getStart1()) {
          cp.setStart(rp.getStart1());
          cp.setEnd(rp.getEnd2());
        } else {
          cp.setStart(rp.getStart2());
          cp.setEnd(rp.getEnd1());
        }
        cp.setExtruded(false);
        cp.setBroken(false);
        lp.setNconnection(lp.getNconnection() + 1);
        cp = new connection.Connection();
        lp.setConnection(lp.getNconnection() - 1, cp);
        lp.setConnection(lp.getNconnection(), null);
        cp.setLoop(retloop);
        cp.setRegion(rp);
        if (i == rp.getStart1()) {
          cp.setStart(rp.getStart2());
          cp.setEnd(rp.getEnd1());
        } else {
          cp.setStart(rp.getStart1());
          cp.setEnd(rp.getEnd2());
        }
        cp.setExtruded(false);
        cp.setBroken(false);
      }
      i = mate;
    }
    if (++i > this.nbase) i = 0;
  } while (i != ibase);
  return retloop;
};
NAView.prototype.find_central_loop = function find_central_loop() {
  var lp = new loop/* Loop */.r();
  var maxconn = null;
  var maxdepth = null;
  var i = null;
  determine_depths.bind(this)();
  maxconn = 0;
  maxdepth = -1;
  for (i = 0; i < this.loop_count; i++) {
    lp = this.loops[i];
    if (lp.getNconnection() > maxconn) {
      maxdepth = lp.getDepth();
      maxconn = lp.getNconnection();
      this.root = lp;
    } else if (lp.getDepth() > maxdepth && lp.getNconnection() == maxconn) {
      maxdepth = lp.getDepth();
      this.root = lp;
    }
  }
};
function determine_depths() {
  var lp = new loop/* Loop */.r();
  var i = null;
  var j = null;
  for (i = 0; i < this.loop_count; i++) {
    lp = this.loops[i];
    for (j = 0; j < this.loop_count; j++) {
      this.loops[j].setMark(false);
    }
    lp.setDepth(depth(lp));
  }
}
function depth(lp) {
  var count = null;
  var ret = null;
  var d = null;
  if (lp.getNconnection() <= 1) {
    return 0;
  }
  if (lp.isMark()) {
    return -1;
  }
  lp.setMark(true);
  count = 0;
  ret = 0;
  for (var i = 0; lp.getConnection(i) != null; i++) {
    d = depth(lp.getConnection(i).getLoop());
    if (d >= 0) {
      if (++count == 1) {
        ret = d;
      } else if (ret > d) {
        ret = d;
      }
    }
  }
  lp.setMark(false);
  return ret + 1;
}
NAView.prototype.traverse_loop = function traverse_loop(lp, anchor_connection) {
  var xs, ys, xe, ye, xn, yn, angleinc, r;
  var radius, xc, yc, xo, yo, astart, aend, a;
  var cp, cpnext, acp, cpprev;
  var i, j, n, ic;
  var da, maxang;
  var count, icstart, icend, icmiddle, icroot;
  var done, done_all_connections, rooted;
  var sign;
  var midx, midy, nrx, nry, mx, my, vx, vy, dotmv, nmidx, nmidy;
  var icstart1, icup, icdown, icnext, direction;
  var dan, dx, dy, rr;
  var cpx, cpy, cpnextx, cpnexty, cnx, cny, rcn, rc, lnx, lny, rl, ac, acn, sx, sy, dcp;
  var imaxloop = 0;
  angleinc = 2 * Math.PI / (this.nbase + 1);
  acp = null;
  icroot = -1;
  var indice = 0;
  for (ic = 0; (cp = lp.getConnection(indice)) != null; indice++, ic++) {
    xs = -Math.sin(angleinc * cp.getStart());
    ys = Math.cos(angleinc * cp.getStart());
    xe = -Math.sin(angleinc * cp.getEnd());
    ye = Math.cos(angleinc * cp.getEnd());
    xn = ye - ys;
    yn = xs - xe;
    r = Math.sqrt(xn * xn + yn * yn);
    cp.setXrad(xn / r);
    cp.setYrad(yn / r);
    cp.setAngle(Math.atan2(yn, xn));
    if (cp.getAngle() < 0.0) {
      cp.setAngle(cp.getAngle() + 2 * Math.PI);
    }
    if (anchor_connection != null && anchor_connection.getRegion() == cp.getRegion()) {
      acp = cp;
      icroot = ic;
    }
  }
  set_radius: while (true) {
    this.determine_radius(lp, this.lencut);
    radius = lp.getRadius() / this.RADIUS_REDUCTION_FACTOR;
    if (anchor_connection == null) {
      xc = yc = 0.0;
    } else {
      xo = (this.bases[acp.getStart()].getX() + this.bases[acp.getEnd()].getX()) / 2.0;
      yo = (this.bases[acp.getStart()].getY() + this.bases[acp.getEnd()].getY()) / 2.0;
      xc = xo - radius * acp.getXrad();
      yc = yo - radius * acp.getYrad();
    }

    // The construction of the connectors will proceed in blocks of
    // connected connectors, where a connected connector pairs means two
    // connectors that are forced out of the drawn circle because they
    // are too close together in angle.

    // First, find the start of a block of connected connectors

    if (icroot == -1) {
      icstart = 0;
    } else {
      icstart = icroot;
    }
    cp = lp.getConnection(icstart);
    count = 0;
    done = false;
    do {
      j = icstart - 1;
      if (j < 0) {
        j = lp.getNconnection() - 1;
      }
      cpprev = lp.getConnection(j);
      if (!this.connected_connection(cpprev, cp)) {
        done = true;
      } else {
        icstart = j;
        cp = cpprev;
      }
      if (++count > lp.getNconnection()) {
        // Here everything is connected. Break on maximum angular
        // separation between connections.
        maxang = -1.0;
        for (ic = 0; ic < lp.getNconnection(); ic++) {
          j = ic + 1;
          if (j >= lp.getNconnection()) {
            j = 0;
          }
          cp = lp.getConnection(ic);
          cpnext = lp.getConnection(j);
          ac = cpnext.getAngle() - cp.getAngle();
          if (ac < 0.0) {
            ac += 2 * Math.PI;
          }
          if (ac > maxang) {
            maxang = ac;
            imaxloop = ic;
          }
        }
        icend = imaxloop;
        icstart = imaxloop + 1;
        if (icstart >= lp.getNconnection()) {
          icstart = 0;
        }
        cp = lp.getConnection(icend);
        cp.setBroken(true);
        done = true;
      }
    } while (!done);
    done_all_connections = false;
    icstart1 = icstart;
    while (!done_all_connections) {
      count = 0;
      done = false;
      icend = icstart;
      rooted = false;
      while (!done) {
        cp = lp.getConnection(icend);
        if (icend == icroot) {
          rooted = true;
        }
        j = icend + 1;
        if (j >= lp.getNconnection()) {
          j = 0;
        }
        cpnext = lp.getConnection(j);
        if (this.connected_connection(cp, cpnext)) {
          if (++count >= lp.getNconnection()) {
            break;
          }
          icend = j;
        } else {
          done = true;
        }
      }
      icmiddle = this.find_ic_middle(icstart, icend, anchor_connection, acp, lp);
      ic = icup = icdown = icmiddle;
      done = false;
      direction = 0;
      while (!done) {
        if (direction < 0) {
          ic = icup;
        } else if (direction == 0) {
          ic = icmiddle;
        } else {
          ic = icdown;
        }
        if (ic >= 0) {
          cp = lp.getConnection(ic);
          if (anchor_connection == null || acp != cp) {
            if (direction == 0) {
              astart = cp.getAngle() - Math.asin(1.0 / 2.0 / radius);
              aend = cp.getAngle() + Math.asin(1.0 / 2.0 / radius);
              this.bases[cp.getStart()].setX(xc + radius * Math.cos(astart));
              this.bases[cp.getStart()].setY(yc + radius * Math.sin(astart));
              this.bases[cp.getEnd()].setX(xc + radius * Math.cos(aend));
              this.bases[cp.getEnd()].setY(yc + radius * Math.sin(aend));
            } else if (direction < 0) {
              j = ic + 1;
              if (j >= lp.getNconnection()) {
                j = 0;
              }
              cp = lp.getConnection(ic);
              cpnext = lp.getConnection(j);
              cpx = cp.getXrad();
              cpy = cp.getYrad();
              ac = (cp.getAngle() + cpnext.getAngle()) / 2.0;
              if (cp.getAngle() > cpnext.getAngle()) {
                ac -= Math.PI;
              }
              cnx = Math.cos(ac);
              cny = Math.sin(ac);
              lnx = cny;
              lny = -cnx;
              da = cpnext.getAngle() - cp.getAngle();
              if (da < 0.0) {
                da += 2 * Math.PI;
              }
              if (cp.isExtruded()) {
                if (da <= Math.PI / 2) {
                  rl = 2.0;
                } else {
                  rl = 1.5;
                }
              } else {
                rl = 1.0;
              }
              this.bases[cp.getEnd()].setX(this.bases[cpnext.getStart()].getX() + rl * lnx);
              this.bases[cp.getEnd()].setY(this.bases[cpnext.getStart()].getY() + rl * lny);
              this.bases[cp.getStart()].setX(this.bases[cp.getEnd()].getX() + cpy);
              this.bases[cp.getStart()].setY(this.bases[cp.getEnd()].getY() - cpx);
            } else {
              j = ic - 1;
              if (j < 0) {
                j = lp.getNconnection() - 1;
              }
              cp = lp.getConnection(j);
              cpnext = lp.getConnection(ic);
              cpnextx = cpnext.getXrad();
              cpnexty = cpnext.getYrad();
              ac = (cp.getAngle() + cpnext.getAngle()) / 2.0;
              if (cp.getAngle() > cpnext.getAngle()) {
                ac -= Math.PI;
              }
              cnx = Math.cos(ac);
              cny = Math.sin(ac);
              lnx = -cny;
              lny = cnx;
              da = cpnext.getAngle() - cp.getAngle();
              if (da < 0.0) {
                da += 2 * Math.PI;
              }
              if (cp.isExtruded()) {
                if (da <= Math.PI / 2) {
                  rl = 2.0;
                } else {
                  rl = 1.5;
                }
              } else {
                rl = 1.0;
              }
              this.bases[cpnext.getStart()].setX(this.bases[cp.getEnd()].getX() + rl * lnx);
              this.bases[cpnext.getStart()].setY(this.bases[cp.getEnd()].getY() + rl * lny);
              this.bases[cpnext.getEnd()].setX(this.bases[cpnext.getStart()].getX() - cpnexty);
              this.bases[cpnext.getEnd()].setY(this.bases[cpnext.getStart()].getY() + cpnextx);
            }
          }
        }
        if (direction < 0) {
          if (icdown == icend) {
            icdown = -1;
          } else if (icdown >= 0) {
            if (++icdown >= lp.getNconnection()) {
              icdown = 0;
            }
          }
          direction = 1;
        } else {
          if (icup == icstart) {
            icup = -1;
          } else if (icup >= 0) {
            if (--icup < 0) {
              icup = lp.getNconnection() - 1;
            }
          }
          direction = -1;
        }
        done = icup == -1 && icdown == -1;
      }
      icnext = icend + 1;
      if (icnext >= lp.getNconnection()) {
        icnext = 0;
      }
      if (icend != icstart && !(icstart == icstart1 && icnext == icstart1)) {
        // Move the bases just constructed (or the radius) so that
        // the bisector of the end points is radius distance away
        // from the loop center.

        cp = lp.getConnection(icstart);
        cpnext = lp.getConnection(icend);
        dx = this.bases[cpnext.getEnd()].getX() - this.bases[cp.getStart()].getX();
        dy = this.bases[cpnext.getEnd()].getY() - this.bases[cp.getStart()].getY();
        midx = this.bases[cp.getStart()].getX() + dx / 2.0;
        midy = this.bases[cp.getStart()].getY() + dy / 2.0;
        rr = Math.sqrt(dx * dx + dy * dy);
        mx = dx / rr;
        my = dy / rr;
        vx = xc - midx;
        vy = yc - midy;
        rr = Math.sqrt(dx * dx + dy * dy);
        vx /= rr;
        vy /= rr;
        dotmv = vx * mx + vy * my;
        nrx = dotmv * mx - vx;
        nry = dotmv * my - vy;
        rr = Math.sqrt(nrx * nrx + nry * nry);
        nrx /= rr;
        nry /= rr;

        // Determine which side of the bisector the center should
        // be.

        dx = this.bases[cp.getStart()].getX() - xc;
        dy = this.bases[cp.getStart()].getY() - yc;
        ac = Math.atan2(dy, dx);
        if (ac < 0.0) {
          ac += 2 * Math.PI;
        }
        dx = this.bases[cpnext.getEnd()].getX() - xc;
        dy = this.bases[cpnext.getEnd()].getY() - yc;
        acn = Math.atan2(dy, dx);
        if (acn < 0.0) {
          acn += 2 * Math.PI;
        }
        if (acn < ac) {
          acn += 2 * Math.PI;
        }
        if (acn - ac > Math.PI) {
          sign = -1;
        } else {
          sign = 1;
        }
        nmidx = xc + sign * radius * nrx;
        nmidy = yc + sign * radius * nry;
        if (rooted) {
          xc -= nmidx - midx;
          yc -= nmidy - midy;
        } else {
          for (ic = icstart;;) {
            cp = lp.getConnection(ic);
            i = cp.getStart();
            this.bases[i].setX(this.bases[i].getX() + nmidx - midx);
            this.bases[i].setY(this.bases[i].getY() + nmidy - midy);
            i = cp.getEnd();
            this.bases[i].setX(this.bases[i].getX() + nmidx - midx);
            this.bases[i].setY(this.bases[i].getY() + nmidy - midy);
            if (ic == icend) {
              break;
            }
            if (++ic >= lp.getNconnection()) {
              ic = 0;
            }
          }
        }
      }
      icstart = icnext;
      done_all_connections = icstart == icstart1;
    }
    for (ic = 0; ic < lp.getNconnection(); ic++) {
      cp = lp.getConnection(ic);
      j = ic + 1;
      if (j >= lp.getNconnection()) {
        j = 0;
      }
      cpnext = lp.getConnection(j);
      dx = this.bases[cp.getEnd()].getX() - xc;
      dy = this.bases[cp.getEnd()].getY() - yc;
      rc = Math.sqrt(dx * dx + dy * dy);
      ac = Math.atan2(dy, dx);
      if (ac < 0.0) {
        ac += 2 * Math.PI;
      }
      dx = this.bases[cpnext.getStart()].getX() - xc;
      dy = this.bases[cpnext.getStart()].getY() - yc;
      rcn = Math.sqrt(dx * dx + dy * dy);
      acn = Math.atan2(dy, dx);
      if (acn < 0.0) {
        acn += 2 * Math.PI;
      }
      if (acn < ac) {
        acn += 2 * Math.PI;
      }
      dan = acn - ac;
      dcp = cpnext.getAngle() - cp.getAngle();
      if (dcp <= 0.0) {
        dcp += 2 * Math.PI;
      }
      if (Math.abs(dan - dcp) > Math.PI) {
        if (cp.isExtruded()) {
          console.log("Warning from traverse_loop. Loop " + lp.getNumber() + " has crossed regions\n");
        } else if (cpnext.getStart() - cp.getEnd() != 1) {
          cp.setExtruded(true);
          continue set_radius; // remplacement du goto
        }
      }

      if (cp.isExtruded()) {
        this.construct_extruded_segment(cp, cpnext);
      } else {
        n = cpnext.getStart() - cp.getEnd();
        if (n < 0) {
          n += this.nbase + 1;
        }
        angleinc = dan / n;
        for (j = 1; j < n; j++) {
          i = cp.getEnd() + j;
          if (i > this.nbase) {
            i -= this.nbase + 1;
          }
          a = ac + j * angleinc;
          rr = rc + (rcn - rc) * (a - ac) / dan;
          this.bases[i].setX(xc + rr * Math.cos(a));
          this.bases[i].setY(yc + rr * Math.sin(a));
        }
      }
    }
    break;
  }
  for (ic = 0; ic < lp.getNconnection(); ic++) {
    if (icroot != ic) {
      cp = lp.getConnection(ic);
      //IM HERE
      this.generate_region(cp);
      this.traverse_loop(cp.getLoop(), cp);
    }
  }
  n = 0;
  sx = 0.0;
  sy = 0.0;
  for (ic = 0; ic < lp.getNconnection(); ic++) {
    j = ic + 1;
    if (j >= lp.getNconnection()) {
      j = 0;
    }
    cp = lp.getConnection(ic);
    cpnext = lp.getConnection(j);
    n += 2;
    sx += this.bases[cp.getStart()].getX() + this.bases[cp.getEnd()].getX();
    sy += this.bases[cp.getStart()].getY() + this.bases[cp.getEnd()].getY();
    if (!cp.isExtruded()) {
      for (j = cp.getEnd() + 1; j != cpnext.getStart(); j++) {
        if (j > this.nbase) {
          j -= this.nbase + 1;
        }
        n++;
        sx += this.bases[j].getX();
        sy += this.bases[j].getY();
      }
    }
  }
  lp.setX(sx / n);
  lp.setY(sy / n);
};
NAView.prototype.determine_radius = function determine_radius(lp, lencut) {
  var mindit, ci, dt, sumn, sumd, radius, dit;
  var i,
    j,
    end,
    start,
    imindit = 0;
  var cp = new connection.Connection(),
    cpnext = new connection.Connection();
  var rt2_2 = 0.7071068;
  do {
    mindit = 1.0e10;
    for (sumd = 0.0, sumn = 0.0, i = 0; i < lp.getNconnection(); i++) {
      cp = lp.getConnection(i);
      j = i + 1;
      if (j >= lp.getNconnection()) {
        j = 0;
      }
      cpnext = lp.getConnection(j);
      end = cp.getEnd();
      start = cpnext.getStart();
      if (start < end) {
        start += this.nbase + 1;
      }
      dt = cpnext.getAngle() - cp.getAngle();
      if (dt <= 0.0) {
        dt += 2 * Math.PI;
      }
      if (!cp.isExtruded()) {
        ci = start - end;
      } else {
        if (dt <= Math.PI / 2) {
          ci = 2.0;
        } else {
          ci = 1.5;
        }
      }
      sumn += dt * (1.0 / ci + 1.0);
      sumd += dt * dt / ci;
      dit = dt / ci;
      if (dit < mindit && !cp.isExtruded() && ci > 1.0) {
        mindit = dit;
        imindit = i;
      }
    }
    radius = sumn / sumd;
    if (radius < rt2_2) {
      radius = rt2_2;
    }
    if (mindit * radius < lencut) {
      lp.getConnection(imindit).setExtruded(true);
    }
  } while (mindit * radius < lencut);
  if (lp.getRadius() > 0.0) {
    radius = lp.getRadius();
  } else {
    lp.setRadius(radius);
  }
};
NAView.prototype.find_ic_middle = function find_ic_middle(icstart, icend, anchor_connection, acp, lp) {
  var count, ret, ic, i;
  var done;
  count = 0;
  ret = -1;
  ic = icstart;
  done = false;
  while (!done) {
    if (count++ > lp.getNconnection() * 2) {
      console.log("Infinite loop in 'find_ic_middle'");
    }
    if (anchor_connection != null && lp.getConnection(ic) == acp) {
      ret = ic;
    }
    done = ic == icend;
    if (++ic >= lp.getNconnection()) {
      ic = 0;
    }
  }
  if (ret == -1) {
    for (i = 1, ic = icstart; i < (count + 1) / 2; i++) {
      if (++ic >= lp.getNconnection()) ic = 0;
    }
    ret = ic;
  }
  return ret;
};
NAView.prototype.construct_extruded_segment = function construct_extruded_segment(cp, cpnext) {
  var astart, aend1, aend2, aave, dx, dy, a1, a2, ac, rr, da, dac;
  var start, end, n, nstart, nend;
  var collision;
  astart = cp.getAngle();
  aend2 = aend1 = cpnext.getAngle();
  if (aend2 < astart) {
    aend2 += 2 * Math.PI;
  }
  aave = (astart + aend2) / 2.0;
  start = cp.getEnd();
  end = cpnext.getStart();
  n = end - start;
  if (n < 0) {
    n += this.nbase + 1;
  }
  da = cpnext.getAngle() - cp.getAngle();
  if (da < 0.0) {
    da += 2 * Math.PI;
  }
  if (n == 2) {
    this.construct_circle_segment(start, end);
  } else {
    dx = this.bases[end].getX() - this.bases[start].getX();
    dy = this.bases[end].getY() - this.bases[start].getY();
    rr = Math.sqrt(dx * dx + dy * dy);
    dx /= rr;
    dy /= rr;
    if (rr >= 1.5 && da <= Math.PI / 2) {
      nstart = start + 1;
      if (nstart > this.nbase) {
        nstart -= this.nbase + 1;
      }
      nend = end - 1;
      if (nend < 0) {
        nend += this.nbase + 1;
      }
      this.bases[nstart].setX(this.bases[start].getX() + 0.5 * dx);
      this.bases[nstart].setY(this.bases[start].getY() + 0.5 * dy);
      this.bases[nend].setX(this.bases[end].getX() - 0.5 * dx);
      this.bases[nend].setY(this.bases[end].getY() - 0.5 * dy);
      start = nstart;
      end = nend;
    }
    do {
      collision = false;
      this.construct_circle_segment(start, end);
      nstart = start + 1;
      if (nstart > this.nbase) {
        nstart -= this.nbase + 1;
      }
      dx = this.bases[nstart].getX() - this.bases[start].getX();
      dy = this.bases[nstart].getY() - this.bases[start].getY();
      a1 = Math.atan2(dy, dx);
      if (a1 < 0.0) {
        a1 += 2 * Math.PI;
      }
      dac = a1 - astart;
      if (dac < 0.0) {
        dac += 2 * Math.PI;
      }
      if (dac > Math.PI) {
        collision = true;
      }
      nend = end - 1;
      if (nend < 0) {
        nend += this.nbase + 1;
      }
      dx = this.bases[nend].getX() - this.bases[end].getX();
      dy = this.bases[nend].getY() - this.bases[end].getY();
      a2 = Math.atan2(dy, dx);
      if (a2 < 0.0) {
        a2 += 2 * Math.PI;
      }
      dac = aend1 - a2;
      if (dac < 0.0) {
        dac += 2 * Math.PI;
      }
      if (dac > Math.PI) {
        collision = true;
      }
      if (collision) {
        ac = this.minf2(aave, astart + 0.5);
        this.bases[nstart].setX(this.bases[start].getX() + Math.cos(ac));
        this.bases[nstart].setY(this.bases[start].getY() + Math.sin(ac));
        start = nstart;
        ac = this.maxf2(aave, aend2 - 0.5);
        this.bases[nend].setX(this.bases[end].getX() + Math.cos(ac));
        this.bases[nend].setY(this.bases[end].getY() + Math.sin(ac));
        end = nend;
        n -= 2;
      }
    } while (collision && n > 1);
  }
};
NAView.prototype.construct_circle_segment = function construct_circle_segment(start, end) {
  var dx, dy, rr, midx, midy, xn, yn, nrx, nry, mx, my, a;
  var l, j, i;
  dx = this.bases[end].getX() - this.bases[start].getX();
  dy = this.bases[end].getY() - this.bases[start].getY();
  rr = Math.sqrt(dx * dx + dy * dy);
  l = end - start;
  if (l < 0) {
    l += this.nbase + 1;
  }
  if (rr >= l) {
    dx /= rr;
    dy /= rr;
    for (j = 1; j < l; j++) {
      i = start + j;
      if (i > this.nbase) {
        i -= this.nbase + 1;
      }
      this.bases[i].setX(this.bases[start].getX() + dx * j / l);
      this.bases[i].setY(this.bases[start].getY() + dy * j / l);
    }
  } else {
    this.find_center_for_arc(l - 1, rr);
    dx /= rr;
    dy /= rr;
    midx = this.bases[start].getX() + dx * rr / 2.0;
    midy = this.bases[start].getY() + dy * rr / 2.0;
    xn = dy;
    yn = -dx;
    nrx = midx + this._h * xn;
    nry = midy + this._h * yn;
    mx = this.bases[start].getX() - nrx;
    my = this.bases[start].getY() - nry;
    rr = Math.sqrt(mx * mx + my * my);
    a = Math.atan2(my, mx);
    for (j = 1; j < l; j++) {
      i = start + j;
      if (i > this.nbase) {
        i -= this.nbase + 1;
      }
      this.bases[i].setX(nrx + rr * Math.cos(a + j * this.angleinc));
      this.bases[i].setY(nry + rr * Math.sin(a + j * this.angleinc));
    }
  }
};
NAView.prototype.find_center_for_arc = function find_center_for_arc(n, b) {
  var h, hhi, hlow, r, disc, theta, e, phi;
  var iter;
  hhi = (n + 1.0) / Math.PI;
  // changed to prevent div by zero if (ih)
  hlow = -hhi - b / (n + 1.000001 - b);
  if (b < 1) {
    // otherwise we might fail below (ih)
    hlow = 0;
  }
  iter = 0;
  do {
    h = (hhi + hlow) / 2.0;
    r = Math.sqrt(h * h + b * b / 4.0);
    disc = 1.0 - 0.5 / (r * r);
    if (Math.abs(disc) > 1.0) {
      console.log("Unexpected large magnitude discriminant = " + disc + " " + r);
    }
    theta = Math.acos(disc);
    phi = Math.acos(h / r);
    e = theta * (n + 1) + 2 * phi - 2 * Math.PI;
    if (e > 0.0) {
      hlow = h;
    } else {
      hhi = h;
    }
  } while (Math.abs(e) > 0.0001 && ++iter < this.MAXITER);
  if (iter >= this.MAXITER) {
    if (noIterationFailureYet) {
      console.log("Iteration failed in find_center_for_arc");
      noIterationFailureYet = false;
    }
    h = 0.0;
    theta = 0.0;
  }
  this._h = h;
  this.angleinc = theta;
};
NAView.prototype.generate_region = function generate_region(cp) {
  var l, start, end, i, mate;
  var rp;
  rp = cp.getRegion();
  l = 0;
  if (cp.getStart() == rp.getStart1()) {
    start = rp.getStart1();
    end = rp.getEnd1();
  } else {
    start = rp.getStart2();
    end = rp.getEnd2();
  }
  if (this.bases[cp.getStart()].getX() > this.ANUM - 100.0 || this.bases[cp.getEnd()].getX() > this.ANUM - 100.0) {
    console.log("Bad region passed to generate_region. Coordinates not defined.");
  }
  for (i = start + 1; i <= end; i++) {
    l++;
    this.bases[i].setX(this.bases[cp.getStart()].getX() + this.HELIX_FACTOR * l * cp.getXrad());
    this.bases[i].setY(this.bases[cp.getStart()].getY() + this.HELIX_FACTOR * l * cp.getYrad());
    mate = this.bases[i].getMate();
    this.bases[mate].setX(this.bases[cp.getEnd()].getX() + this.HELIX_FACTOR * l * cp.getXrad());
    this.bases[mate].setY(this.bases[cp.getEnd()].getY() + this.HELIX_FACTOR * l * cp.getYrad());
  }
};
NAView.prototype.minf2 = function minf2(x1, x2) {
  return x1 < x2 ? x1 : x2;
};
NAView.prototype.maxf2 = function maxf2(x1, x2) {
  return x1 > x2 ? x1 : x2;
};
NAView.prototype.connected_connection = function connected_connection(cp, cpnext) {
  if (cp.isExtruded()) {
    return true;
  } else if (cp.getEnd() + 1 == cpnext.getStart()) {
    return true;
  } else {
    return false;
  }
};
;// CONCATENATED MODULE: ./src/fornac.js
/* Version: 0.2
* Date: 2015-03-15
*/









function FornaContainer(element) {
  var passedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var self = this;
  var options = {
    'editable': false,
    'zoomable': true,
    'animation': true,
    'displayAllLinks': false,
    'labelInterval': 10,
    'chargeDistance': 110,
    'friction': 0.35,
    'middleCharge': -30,
    'otherCharge': -30,
    'linkDistanceMultiplier': 15,
    'initialSize': null,
    'layout': 'standard-polygonal',
    'transitionDuration': 500,
    'maxNodeRadius': 80 // the maximum radius of a node when the view is centered
  };

  self.options = Object.assign(options, passedOptions);
  if (self.options.initialSize !== null) {
    self.options.svgW = self.options.initialSize[0];
    self.options.svgH = self.options.initialSize[1];
  } else {
    self.options.svgW = 300;
    self.options.svgH = 300;
  }
  self.linkStrengths = {
    'pseudoknot': 0.00,
    'proteinChain': 0.00,
    'chainChain': 0.00,
    'intermolecule': 10.00,
    'external': 0.00,
    'other': 10.00
  };
  self.displayParameters = {
    'displayNumbering': true,
    'displayNodeOutline': true,
    'displayNodeLabel': true,
    'displayLinks': true,
    'displayPseudoknotLinks': true,
    'displayProteinLinks': true,
    'displayDirectionArrows': true
  };
  self.colorScheme = 'structure';
  self.customColors = {};
  self.rnas = {};
  self.extraLinks = []; //store links between different RNAs

  // global mouse event vars
  var mousedownLink = null,
    mousedownNode = null,
    mouseupNode = null;
  var linkContextMenuShown = false;
  var resetMouseVars = function resetMouseVars() {
    mousedownNode = null;
    mouseupNode = null;
    mousedownLink = null;
  };
  var graph = self.graph = {
    'nodes': [],
    'links': []
  };
  Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array) return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length) return false;
    for (var i = 0, l = this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].equals(array[i])) return false;
      } else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  };

  /* Register global mouse and key events */
  if (self.options.editable || self.options.animation) {
    var shiftKeydown = false;
    var ctrlKeydown = false;
    var keydown = function keydown() {
      switch ((external_d3_default()).event.keyCode) {
        case 68:
          //'d' key
          console.log('dotbracket:', self.getStructuresDotBracket());
          break;
        case 16:
          shiftKeydown = true;
          break;
        case 17:
          ctrlKeydown = true;
          break;
        case 67:
          //c
          self.centerView();
          break;
      }
      if (ctrlKeydown) {
        // Ctrl key must disable panning and zooming
        if (self.options.zoomable) disableZooming();
        // Ctrl Button must enable crosshair and start brusher
        if (self.options.editable || self.options.animation) {
          enableBrushing();
        }
      }
    };
    var keyup = function keyup() {
      shiftKeydown = false;
      ctrlKeydown = false;

      // enable zoomer
      if (self.options.zoomable) enableZooming();
      // disable brushing events
      disableBrushing();
    };
    external_d3_default().select('body').on('keydown', keydown).on('keyup', keyup).on('contextmenu', function () {
      external_d3_default().event.preventDefault();
    });
  }

  /* Register global context menu */
  if (self.options.editable) {
    var backgroundMenu = [{
      title: 'Add Node',
      action: function action(elm, d, i, mousePos) {},
      children: [{
        'title': 'A',
        action: function action(elm, d, i, mousePos) {
          console.log('mousePos:', mousePos, self.options.svgW, self.options.svgH);
          var canvasMousePos = [xScale.invert(mousePos[0]), yScale.invert(mousePos[1])];
          console.log('canvasMousePos', canvasMousePos);
          self.addRNA('.', {
            'sequence': 'A',
            'centerPos': canvasMousePos
          });
        }
      }, {
        'title': 'C',
        action: function action(elm, d, i, mousePos) {
          console.log('mousePos:', mousePos, self.options.svgW, self.options.svgH);
          var canvasMousePos = [xScale.invert(mousePos[0]), yScale.invert(mousePos[1])];
          console.log('canvasMousePos', canvasMousePos);
          self.addRNA('.', {
            'sequence': 'C',
            'centerPos': canvasMousePos
          });
        }
      }, {
        'title': 'G',
        action: function action(elm, d, i, mousePos) {
          console.log('mousePos:', mousePos, self.options.svgW, self.options.svgH);
          var canvasMousePos = [xScale.invert(mousePos[0]), yScale.invert(mousePos[1])];
          console.log('canvasMousePos', canvasMousePos);
          self.addRNA('.', {
            'sequence': 'G',
            'centerPos': canvasMousePos
          });
        }
      }, {
        'title': 'U',
        action: function action(elm, d, i, mousePos) {
          console.log('mousePos:', mousePos, self.options.svgW, self.options.svgH);
          var canvasMousePos = [xScale.invert(mousePos[0]), yScale.invert(mousePos[1])];
          console.log('canvasMousePos', canvasMousePos);
          self.addRNA('.', {
            'sequence': 'U',
            'centerPos': canvasMousePos
          });
        }
      }],
      disabled: false // optional, defaults to false
    }];

    var nodeMenu = [{
      title: 'Delete Node',
      action: function action(elm, d, i) {
        deleteNode(d);
      },
      disabled: false // optional, defaults to false
    }, {
      title: 'Change Node',
      action: function action(elm, d, i) {
        console.log('You have clicked the second item!');
        console.log('The data for this circle is: ' + d);
      },
      children: [{
        title: 'A',
        action: function action(elm, d, i) {
          changeNode('A', d);
        }
      }, {
        title: 'C',
        action: function action(elm, d, i) {
          changeNode('C', d);
        }
      }, {
        title: 'G',
        action: function action(elm, d, i) {
          changeNode('G', d);
        }
      }, {
        title: 'U',
        action: function action(elm, d, i) {
          changeNode('U', d);
        }
      }]
    }, {
      title: 'Insert Before',
      action: function action(elm, d, i) {},
      children: [{
        title: 'A',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('A', d, -1);
        }
      }, {
        title: 'C',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('C', d, -1);
        }
      }, {
        title: 'G',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('G', d, -1);
        }
      }, {
        title: 'U',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('U', d, -1);
        }
      }]
    }, {
      title: 'Insert After',
      action: function action(elm, d, i) {
        console.log('d:', d);
      },
      children: [{
        title: 'A',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('A', d, 0);
        }
      }, {
        title: 'C',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('C', d, 0);
        }
      }, {
        title: 'G',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('G', d, 0);
        }
      }, {
        title: 'U',
        action: function action(elm, d, i) {
          insertNodeBeforeOrAfter('U', d, 0);
        }
      }]
    }];
    self.nodeContextMenu = contextMenu(nodeMenu);
    self.backgroundContextMenu = contextMenu(backgroundMenu);
  } else {
    //console.log('empty context menu');
    self.nodeContextMenu = function () {};
  }

  /* Draw the plot here */
  external_d3_default().select(element).select('svg').remove();
  var svg = external_d3_default().select(element).attr('tabindex', 1).each(function () {
    this.focus();
  }).append('svg:svg').attr('preserveAspectRatio', 'xMidYMid meet').attr('viewBox', '0 0 ' + self.options.svgW + ' ' + self.options.svgH);
  self.options.svg = svg;
  if (self.options.editable || self.options.animation) {
    var mouseEventHelper = svg.append('svg:g').on('mousemove', function () {
      // only if we are dragging
      if (!mousedownNode) return;

      // update drag line
      var mpos = external_d3_default().mouse(vis.node());
      dragLine.attr('x1', mousedownNode.x).attr('y1', mousedownNode.y).attr('x2', mpos[0]).attr('y2', mpos[1]);
    }).on('mousedown', function () {}).on('mouseup', function () {
      if (mousedownNode && !linkContextMenuShown) {
        dragLine.classed((fornac_default()).transparent, true);
      }
      // clear mouse event vars
      resetMouseVars();
      //update()
    }).classed((fornac_default()).mouseEventHelper, true).style('pointer-events', 'all');

    // draw a background layer for mouse events
    mouseEventHelper.append('svg:rect').classed('background', true).style('visibility', 'hidden').attr('width', self.options.svgW).attr('height', self.options.svgH).on('mousedown', function () {
      //console.log('background click');
      deselectAllNodes();
    });
  } else {
    var mouseEventHelper = svg;
  }
  var vis = mouseEventHelper.append('svg:g').classed((fornac_default()).plot, true);
  var visLinks = vis.append('svg:g').classed('fornac-links', true);
  var visNodes = vis.append('svg:g').classed('fornac-nodes', true);

  // line displayed when dragging new nodes
  if (self.options.editable) {
    var dragLine = vis.append('line').attr('class', (fornac_default()).dragLine).attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', 0);
    svg.on('contextmenu', self.backgroundContextMenu);
  }

  /* Zooming related objects and functions */
  var xScale = external_d3_default().scale.linear().domain([0, self.options.svgW]).range([0, self.options.svgW]);
  var yScale = external_d3_default().scale.linear().domain([0, self.options.svgH]).range([0, self.options.svgH]);
  self.zoomer = external_d3_default().behavior.zoom().scaleExtent([0.1, 10]).x(xScale).y(yScale).on('zoom', function () {
    vis.attr('transform', 'translate(' + (external_d3_default()).event.translate + ')' + ' scale(' + (external_d3_default()).event.scale + ')');
  });
  var enableZooming = function enableZooming() {
    svg.call(self.zoomer).on("dblclick.zoom", null);
  };
  var disableZooming = function disableZooming() {
    svg.call(self.zoomer).on("dblclick.zoom", null).on('mousedown.zoom', null).on('touchstart.zoom', null).on('touchmove.zoom', null).on('touchend.zoom', null);
  };
  if (self.options.zoomable) enableZooming();

  /* Node selection related objects and functions */
  var toggleSelectNode = function toggleSelectNode(node) {
    node.selected = !node.selected;
    visNodes.selectAll('g.gnode').filter(function (d) {
      return node.uid == d.uid;
    }).classed((fornac_default()).selectedNode, function (p) {
      return p.selected;
    });
  };
  var selectNode = function selectNode(node) {
    node.selected = true;
    visNodes.selectAll('g.gnode').filter(function (d) {
      return node.uid == d.uid;
    }).classed((fornac_default()).selectedNode, function (p) {
      return p.selected;
    });
  };
  var deselectAllNodes = function deselectAllNodes() {
    visNodes.selectAll('g.gnode').classed((fornac_default()).selectedNode, function (p) {
      return p.selected = false;
    });
  };
  var selectedNodes = function selectedNodes() {
    // return all selected nodes
    return visNodes.selectAll('g.gnode').filter(function (d) {
      return d.selected;
    });
  };
  self.brusher = external_d3_default().svg.brush().x(xScale).y(yScale).on('brushstart', function (d) {}).on('brush', function () {
    // during brushing invert styling of selection as preview
    var extent = external_d3_default().event.target.extent();
    visNodes.selectAll('g.gnode').classed((fornac_default()).selectedNode, function (d) {
      return d.selected ^ (extent[0][0] <= d.x && d.x < extent[1][0] && extent[0][1] <= d.y && d.y < extent[1][1]);
    });
  }).on('brushend', function () {
    // after brushing finally toggle the selection
    var extent = external_d3_default().event.target.extent();
    visNodes.selectAll('g.gnode').filter(function (d) {
      return extent[0][0] <= d.x && d.x < extent[1][0] && extent[0][1] <= d.y && d.y < extent[1][1];
    }).each(toggleSelectNode);
    external_d3_default().event.target.clear();
    external_d3_default().select(this).call((external_d3_default()).event.target);
  });
  var enableBrushing = function enableBrushing() {
    // crosshair curson
    mouseEventHelper.select('.background').style('cursor', 'crosshair');
    // bind brusher
    mouseEventHelper.call(self.brusher);
  };
  var disableBrushing = function disableBrushing() {
    // normal cursor
    mouseEventHelper.select('.background').style('cursor', 'auto');
    // disable brushing events
    mouseEventHelper.call(self.brusher).on('mousedown.brush', null).on('touchstart.brush', null).on('touchmove.brush', null).on('touchend.brush', null);
  };

  /* Force related objects and functions */
  self.force = external_d3_default().layout.force().charge(function (d) {
    if (d.nodeType == 'middle') return self.options.middleCharge;else return self.options.otherCharge;
  }).friction(self.options.friction).linkDistance(function (d) {
    return self.options.linkDistanceMultiplier * d.value;
  }).linkStrength(function (d) {
    if (d.linkType in self.linkStrengths) {
      return self.linkStrengths[d.linkType];
    } else {
      return self.linkStrengths.other;
    }
  }).gravity(0.000).nodes(self.graph.nodes).links(self.graph.links).chargeDistance(self.options.chargeDistance).size([self.options.svgW, self.options.svgH]);
  var drag = external_d3_default().behavior.drag().on('dragstart', function (d) {
    console.log('dragstart');
    external_d3_default().event.sourceEvent.stopPropagation();
    selectedNodes().each(function (d1) {
      d1.fixed |= 2;
    });
  }).on('drag', function (d) {
    if (shiftKeydown) return;
    selectedNodes().each(function (d1) {
      d1.x += (external_d3_default()).event.dx;
      d1.y += (external_d3_default()).event.dy;
      d1.px += (external_d3_default()).event.dx;
      d1.py += (external_d3_default()).event.dy;
    });
    self.resumeForce();
    external_d3_default().event.sourceEvent.preventDefault();
  }).on('dragend', function (d) {
    console.log('dragend');
    selectedNodes().each(function (d1) {
      d1.fixed &= ~6;
    });
  });

  /* Main plot drawing functions */
  var createInitialLayout = function createInitialLayout(structure) {
    var passedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // the default options
    var options = {
      'sequence': '',
      'name': 'empty',
      'positions': [],
      'labelInterval': self.options.labelInterval,
      'avoidOthers': true,
      'uids': [],
      'circularizeExternal': true
    };
    options = Object.assign(options, passedOptions);

    //console.log('options.uids:', options.uids);
    var rg = new RNAGraph(options.sequence, structure, options.name);
    rg.circularizeExternal = options.circularizeExternal;
    var rnaJson = rg.recalculateElements();
    if (options.positions.length === 0) {
      // no provided positions means we need to calculate an initial layout

      if (self.options.layout == 'naview') {
        var naview = new NAView();
        var naViewPositions = naview.naview_xy_coordinates(rg.pairtable);
        options.positions = [];
        for (var i = 0; i < naViewPositions.nbase; i++) options.positions.push([naViewPositions.x[i], naViewPositions.y[i]]);
      } else {
        options.positions = simpleXyCoordinates(rnaJson.pairtable);
      }
    }
    rnaJson = rnaJson.elementsToJson().addUids(options.uids).addPositions('nucleotide', options.positions).addLabels(1, options.labelInterval).reinforceStems().reinforceLoops().connectFakeNodes().reassignLinkUids().breakNodesToFakeNodes();
    return rnaJson;
  };
  var createNewNodes = function createNewNodes(gnodesEnter) {
    gnodesEnter = gnodesEnter.append('g').classed('gnode', true).attr('struct_name', function (d) {
      return d.structName;
    }).attr('transform', function (d) {
      if (typeof d.x != 'undefined' && typeof d.y != 'undefined') return 'translate(' + [d.x, d.y] + ')';else return '';
    }).each(function (d) {
      d.selected = d.previouslySelected = false;
    });
    gnodesEnter.attr('num', function (d) {
      return 'n' + d.num;
    }).attr('rnum', function (d) {
      return 'n' + (d.rna.rnaLength - d.num + 1);
    }).transition().duration(750).ease('elastic');
    if (self.options.editable || self.options.animation) {
      gnodesEnter.on('mousedown', nodeMousedown)
      //.on('mousedrag', function(d) {})
      .on('mouseup', nodeMouseup).on('contextmenu', self.nodeContextMenu).call(drag);
    }
    var labelAndProteinNodes = gnodesEnter.filter(function (d) {
      return d.nodeType == 'label' || d.nodeType == 'protein';
    });
    var nucleotideNodes = gnodesEnter.filter(function (d) {
      return d.nodeType == 'nucleotide';
    });
    labelAndProteinNodes.append('svg:circle').classed((fornac_default()).node, true).attr('r', function (d) {
      if (d.nodeType == 'middle') return 0;else {
        return d.radius;
      }
    }).attr('node_type', function (d) {
      return d.nodeType;
    }).attr('node_num', function (d) {
      return d.num;
    });

    // direction arrows
    nucleotideNodes.append('svg:path').attr('class', (fornac_default()).directionArrow).attr('node_num', function (d) {
      return d.num;
    });

    // nucleotide outlines
    nucleotideNodes.append('svg:circle').attr('class', (fornac_default()).node).attr('node_type', function (d) {
      return d.nodeType;
    }).attr('node_num', function (d) {
      return d.num;
    }).attr('r', function (d) {
      return d.radius;
    }).append('svg:title').text(function (d) {
      if (d.nodeType == 'nucleotide') {
        return d.structName + ':' + d.num;
      } else {
        return '';
      }
    });

    // nucleotide labels
    var labelsEnter = gnodesEnter.append('text').text(function (d) {
      return d.name;
    }).attr('class', (fornac_default()).nodeLabel).attr('label_type', function (d) {
      return d.nodeType;
    });

    // nucleotide label title
    labelsEnter.append('svg:title').text(function (d) {
      if (d.nodeType == 'nucleotide') {
        return d.structName + ':' + d.num;
      } else {
        return '';
      }
    });
    return gnodesEnter;
  };
  var createNewLinks = function createNewLinks(linksEnter) {
    var linkLines = linksEnter.append('svg:line');
    linkLines.append('svg:title').text(function (d) {
      return d.linkType + ':' + d.source.num + '-' + d.target.num;
    });
    linkLines.classed('link', true).classed((fornac_default()).link, true).attr('x1', function (d) {
      return d.source.x;
    }).attr('y1', function (d) {
      return d.source.y;
    }).attr('x2', function (d) {
      return d.target.x;
    }).attr('y2', function (d) {
      return d.target.y;
    }).attr('link_type', function (d) {
      return d.linkType;
    }).attr('pointer-events', function (d) {
      if (d.linkType == 'fake') return 'none';else return 'all';
    });
    if (self.options.editable) linkLines.on('click', linkClick);

    /* We don't need to update the positions of the stabilizing links */
    /*
    basepairLinks = visLinks.selectAll('[link_type=basepair]');
    basepairLinks.classed('basepair', true);
     fakeLinks = visLinks.selectAll('[link_type=fake]')
    fakeLinks.classed('fake', true);
     intermolecule_links = vis_links.selectAll('[link_type=intermolecule]');
    intermolecule_links.classed('intermolecule', true);
     plink = vis_links.selectAll('[link_type=protein_chain],[link_type=chain_chain]');
    plink.classed('chain_chain', true);
    */

    return linkLines;
  };
  function drawDirectionArrow(d) {
    var magnitude = function magnitude(x) {
      return Math.sqrt(x[0] * x[0] + x[1] * x[1]);
    };
    var endPoint = d;
    var startPoint = d.prevNode;
    // get stroke width and arrow size values from css
    var nodeStroke = parseFloat((fornac_default()).nodeStrokeWidth) / 2;
    var lengthMult = parseFloat((fornac_default()).directionArrowSize);
    var arrowWidth = parseFloat((fornac_default()).directionArrowWidth);
    if (startPoint === null) return;

    // does this node have a link pointing to it?
    if (!d.linked) return;

    // point back toward the previous node
    var u = [-(endPoint.x - startPoint.x), -(endPoint.y - startPoint.y)];
    if (u[0] == 0 && u[1] == 0) return; // will lead to a NaN error

    // scale u to unit length
    u = [u[0] / magnitude(u), u[1] / magnitude(u)];
    // normal vector of u
    var v = [-u[1], u[0]];

    // calculate the tip position
    var arrowTip = [(d.radius + nodeStroke) * u[0], (d.radius + nodeStroke) * u[1]];
    var path = 'M' + (arrowTip[0] + lengthMult * (u[0] / 2 + v[0] * arrowWidth / 2)) + ',' + (arrowTip[1] + lengthMult * (u[1] / 2 + v[1] * arrowWidth / 2)) + 'L' + arrowTip[0] + ',' + arrowTip[1] + 'L' + (arrowTip[0] + lengthMult * (u[0] / 2 - v[0] * arrowWidth / 2)) + ',' + (arrowTip[1] + lengthMult * (u[1] / 2 - v[1] * arrowWidth / 2));
    external_d3_default().select(this).attr('d', path);
  }
  var realLinkFilter = function realLinkFilter(d) {
    return d.linkType == 'basepair' || d.linkType == 'backbone' || d.linkType == 'intermolecule' || d.linkType == 'pseudoknot' || d.linkType == 'label_link' || d.linkType == 'external' || d.linkType == 'chain_chain';
  };
  var recalculateGraph = function recalculateGraph() {
    // Condense all of the individual RNAs into one
    // collection of nodes and links
    self.graph.nodes = [];
    self.graph.links = [];
    for (var uid in self.rnas) {
      self.graph.nodes = self.graph.nodes.concat(self.rnas[uid].nodes);
      self.graph.links = self.graph.links.concat(self.rnas[uid].links);
    }

    // Create a lookup table so that we can access each node
    // based on its uid. This will be used to create the links
    // between different RNAs
    var uidsToNodes = {};
    for (var i = 0; i < self.graph.nodes.length; i++) uidsToNodes[self.graph.nodes[i].uid] = self.graph.nodes[i];
    self.graph.links.forEach(function (link) {
      link.source = uidsToNodes[link.source.uid];
      link.target = uidsToNodes[link.target.uid];
    });
    var _loop = function _loop(_i) {
      // the actual node objects may have changed, so we hae to recreate
      // the extra links based on the uids
      if (!(self.extraLinks[_i].target.uid in uidsToNodes)) {
        console.log('not there:', self.extraLinks[_i]);
        return "continue";
      }
      self.extraLinks[_i].source = uidsToNodes[self.extraLinks[_i].source.uid];
      self.extraLinks[_i].target = uidsToNodes[self.extraLinks[_i].target.uid];
      if (self.extraLinks[_i].linkType == 'intermolecule') {
        //remove links to middle nodes
        var fakeLinks = self.graph.links.filter(function (d) {
          return (d.source == self.extraLinks[_i].source || d.source == self.extraLinks[_i].target || d.target == self.extraLinks[_i].source || d.target == self.extraLinks[_i].source) && d.linkType == 'fake';
        });
        for (var j = 0; j < fakeLinks.length; j++) {
          var linkIndex = self.graph.links.indexOf(fakeLinks[j]);
          self.graph.links.splice(linkIndex, 1);
        }
      }
      graph.links.push(self.extraLinks[_i]);
    };
    for (var _i = 0; _i < self.extraLinks.length; _i++) {
      var _ret = _loop(_i);
      if (_ret === "continue") continue;
    }
  };
  self.update = function () {
    self.force.nodes(self.graph.nodes).links(self.graph.links);
    if (self.options.animation) {
      self.force.start();
    }
    var allLinks = visLinks.selectAll('line.link').data(self.graph.links.filter(realLinkFilter), elementKey);
    allLinks.attr('class', '').classed('link', true).classed((fornac_default()).link, true).attr('link_type', function (d) {
      return d.linkType;
    });
    var linksEnter = allLinks.enter();
    createNewLinks(linksEnter);
    allLinks.exit().remove();
    var gnodes = visNodes.selectAll('g.gnode').data(self.graph.nodes, elementKey);
    //.attr('pointer-events', 'all');

    var gnodesEnter = gnodes.enter();
    createNewNodes(gnodesEnter);
    gnodes.exit().remove();

    //fake_nodes = self.graph.nodes.filter(function(d) { return d.nodeType == 'middle'; });
    //fakeNodes = self.graph.nodes.filter(function(d) { return true; });
    var realNodes = self.graph.nodes.filter(function (d) {
      return d.nodeType == 'nucleotide' || d.nodeType == 'label';
    });
    gnodes.select('.' + (fornac_default()).directionArrow).each(drawDirectionArrow);
    self.force.on('tick', function () {
      var q = external_d3_default().geom.quadtree(realNodes);
      var i = 0;
      var n = realNodes.length;
      var collide = function collide(node) {
        var r = node.radius + 16,
          nx1 = node.x - r,
          nx2 = node.x + r,
          ny1 = node.y - r,
          ny2 = node.y + r;
        return function (quad, x1, y1, x2, y2) {
          if (quad.point && quad.point !== node) {
            var x = node.x - quad.point.x,
              y = node.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              _r = node.radius + quad.point.radius;
            if (l < _r) {
              l = (l - _r) / l * 0.1;
              node.x -= x *= l;
              node.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        };
      };
      while (++i < n) q.visit(collide(realNodes[i]));
      allLinks.attr('x1', function (d) {
        return d.source.x;
      }).attr('y1', function (d) {
        return d.source.y;
      }).attr('x2', function (d) {
        return d.target.x;
      }).attr('y2', function (d) {
        return d.target.y;
      });

      // Translate the groups
      gnodes.attr('transform', function (d) {
        return 'translate(' + [d.x, d.y] + ')';
      });
      gnodes.select('.' + (fornac_default()).directionArrow).each(drawDirectionArrow);
    });
    self.force.on('end', function () {
      gnodes.selectAll('[node_type=nucleotide]').filter(function (d, i) {
        if (i == 0) return true;else return false;
      }).each(function (d, i) {
        //console.log("pos", d.num, d.x, d.y);
      });

      //for (let uid in self.rnas) {
      //    for (let i = 1; i < self.rnas[uid].pairtable[0]; i++) {
      //        console.log('pt', i, self.rnas[uid].pairtable[i]);
      //    }
      //}
    });

    self.changeColorScheme(self.colorScheme);
    if (self.options.animation) {
      self.force.start();
    }
    updateStyle();
  };
  self.transitionRNA = function (newStructure, nextFunction) {
    if (self.dotbracket == newStructure) {
      return;
    } else {
      self.dotbracket = newStructure;
    }
    //transition from an RNA which is already displayed to a new structure
    var duration = self.options.transitionDuration;
    var uids = self.graph.nodes.filter(function (d) {
      return d.nodeType == 'nucleotide';
    }).map(function (d) {
      return d.uid;
    });
    var options = {
      'uids': uids
    };
    var newRNAJson = createInitialLayout(newStructure, options);
    var gnodes = visNodes.selectAll('g.gnode').data(newRNAJson.nodes, elementKey);
    var links = visLinks.selectAll('line.link').data(newRNAJson.links.filter(realLinkFilter), elementKey);
    if (duration === 0) gnodes.attr('transform', function (d) {
      return 'translate(' + [d.x, d.y] + ')';
    });else {
      gnodes.transition().attr('transform', function (d) {
        return 'translate(' + [d.x, d.y] + ')';
      }).duration(duration);
    }
    var newNodes = createNewNodes(gnodes.enter()).attr('transform', function (d) {
      if (typeof d.x != 'undefined' && typeof d.y != 'undefined') return 'translate(' + [0, 0] + ')';else return '';
    });
    if (duration === 0) gnodes.exit().remove();else gnodes.exit().transition().attr('transform', function (d) {
      if (typeof d.x != 'undefined' && typeof d.y != 'undefined') return 'translate(' + [0, 0] + ')';else return '';
    });
    self.graph.nodes = gnodes.data();
    gnodes.select('.' + (fornac_default()).directionArrow).each(drawDirectionArrow);
    self.changeColorScheme(self.colorScheme);
    updateStyle();
    self.centerView(duration);
    function endall(transition, callback) {
      if (transition.size() === 0) {
        setTimeout(callback, duration);
      }
      var n = 0;
      transition.each(function () {
        ++n;
      }).each('end', function () {
        if (! --n) callback.apply(this, arguments);
      });
    }
    function afterAnimation() {
      var newLinks = createNewLinks(links.enter());
      self.graph.links = links.data();
      self.changeColorScheme(self.colorScheme);
      updateStyle();
      if (typeof nextFunction != 'undefined') nextFunction();
    }
    links.exit().remove();
    if (duration === 0) {
      links.attr('x1', function (d) {
        return d.source.x;
      }).attr('y1', function (d) {
        return d.source.y;
      }).attr('x2', function (d) {
        return d.target.x;
      }).attr('y2', function (d) {
        return d.target.y;
      });
      var newLinks = createNewLinks(links.enter());
      self.graph.links = links.data();
      updateStyle();
    } else {
      links.transition().attr('x1', function (d) {
        return d.source.x;
      }).attr('y1', function (d) {
        return d.source.y;
      }).attr('x2', function (d) {
        return d.target.x;
      }).attr('y2', function (d) {
        return d.target.y;
      }).duration(duration).call(endall, afterAnimation);
    }
    if (duration === 0) {
      newNodes.attr('transform', function (d) {
        if (typeof d.x != 'undefined' && typeof d.y != 'undefined') return 'translate(' + [d.x, d.y] + ')';else return '';
      });
    } else {
      newNodes.transition().attr('transform', function (d) {
        if (typeof d.x != 'undefined' && typeof d.y != 'undefined') return 'translate(' + [d.x, d.y] + ')';else return '';
      });
    }
  };

  /* Plot presentation related functions */
  var getBoundingBoxTransform = function getBoundingBoxTransform() {
    // Center the view on the molecule(s) and scale it so that everything
    // fits in the window

    //no molecules, nothing to do
    if (self.graph.nodes.length === 0) return {
      'translate': [0, 0],
      'scale': 1
    };

    // Get the bounding box
    var minX = external_d3_default().min(self.graph.nodes.map(function (d) {
      return d.x;
    }));
    var minY = external_d3_default().min(self.graph.nodes.map(function (d) {
      return d.y;
    }));
    var maxX = external_d3_default().max(self.graph.nodes.map(function (d) {
      return d.x;
    }));
    var maxY = external_d3_default().max(self.graph.nodes.map(function (d) {
      return d.y;
    }));
    var maxRadius = external_d3_default().max(self.graph.nodes.map(function (d) {
      return d.radius;
    }));

    // The width and the height of the molecule
    var molWidth = maxX - minX;
    var molHeight = maxY - minY;

    // how much larger the drawing area is than the width and the height
    var widthRatio = self.options.svgW / (molWidth + 1);
    var heightRatio = self.options.svgH / (molHeight + 1);

    // we need to fit it in both directions, so we scale according to
    // the direction in which we need to shrink the most
    var minRatio = Math.min(widthRatio, heightRatio, self.options.maxNodeRadius / maxRadius) * 0.8;

    // the new dimensions of the molecule
    var newMolWidth = molWidth * minRatio;
    var newMolHeight = molHeight * minRatio;

    // translate so that it's in the center of the window
    var xTrans = -minX * minRatio + (self.options.svgW - newMolWidth) / 2;
    var yTrans = -minY * minRatio + (self.options.svgH - newMolHeight) / 2;
    return {
      'translate': [xTrans, yTrans],
      'scale': minRatio
    };
  };
  self.centerView = function () {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var bbTransform = getBoundingBoxTransform();
    if (bbTransform === null) return;

    // do the actual moving
    vis.transition().attr('transform', 'translate(' + bbTransform.translate + ')' + ' scale(' + bbTransform.scale + ')').duration(duration);

    // tell the zoomer what we did so that next we zoom, it uses the
    // transformation we entered here
    self.zoomer.translate(bbTransform.translate);
    self.zoomer.scale(bbTransform.scale);
  };
  self.setSize = function () {
    var svgW = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : external_d3_default().select(element).node().offsetWidth;
    var svgH = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : external_d3_default().select(element).node().offsetHeight;
    // save width and height
    self.options.svgW = svgW;
    self.options.svgH = svgH;

    // set the viewBox
    svg.attr('viewBox', "0 0 " + svgW + " " + svgH);

    //Set the output range of the scales
    xScale.range([0, svgW]).domain([0, svgW]);
    yScale.range([0, svgH]).domain([0, svgH]);

    //re-attach the scales to the zoom behaviour
    self.zoomer.x(xScale).y(yScale);
    self.brusher.x(xScale).y(yScale);

    //resize the background
    svg.select('.background').attr('width', svgW).attr('height', svgH);

    // center the view
    self.centerView();
  };

  /* Style and color related functions */
  self.setOutlineColor = function (color) {
    var nodes = visNodes.selectAll('g.gnode').select('[node_type=nucleotide]');
    nodes.style('fill', color);
  };
  self.addCustomColors = function addCustomColors(json) {
    // Add a json file containing the custom colors
    self.customColors = json;
    self.changeColorScheme('custom');
  };
  self.addCustomColorsText = function (customColorsText) {
    var cs = new ColorScheme(customColorsText);
    self.customColors = cs.colorsJson;
    self.changeColorScheme('custom');
  };
  self.changeColorScheme = function (newColorScheme) {
    var proteinNodes = visNodes.selectAll('[node_type=protein]');
    proteinNodes.classed((fornac_default()).node, true).attr('r', function (d) {
      return d.radius;
    });
    var gnodes = visNodes.selectAll('g.gnode');
    var circles = visNodes.selectAll('g.gnode').selectAll('circle');
    var nodes = visNodes.selectAll('g.gnode').select('[node_type=nucleotide]');
    self.colorScheme = newColorScheme;
    if (newColorScheme == 'sequence') {
      var scale = external_d3_default().scale.ordinal().range(['#dbdb8d', '#98df8a', '#ff9896', '#aec7e8', '#aec7e8']).domain(['A', 'C', 'G', 'U', 'T']);
      nodes.style('fill', function (d) {
        return scale(d.name);
      });
    } else if (newColorScheme == 'structure') {
      var scale = external_d3_default().scale.category10().domain(['s', 'm', 'i', 'e', 't', 'h', 'x']).range(['lightgreen', '#ff9896', '#dbdb8d', 'lightsalmon', 'lightcyan', 'lightblue', 'transparent']);
      nodes.style('fill', function (d) {
        return scale(d.elemType);
      });
    } else if (newColorScheme == 'positions') {
      nodes.style('fill', function (d) {
        var scale = external_d3_default().scale.linear().range(['#98df8a', '#dbdb8d', '#ff9896']).interpolate((external_d3_default()).interpolateLab).domain([1, 1 + (d.rna.rnaLength - 1) / 2, d.rna.rnaLength]);
        return scale(d.num);
      });
    } else if (newColorScheme == 'custom') {
      // scale to be used in case the user passes scalar
      // values rather than color names
      if (typeof self.customColors != 'undefined' && 'domain' in self.customColors && 'range' in self.customColors) {
        var scale = external_d3_default().scale.linear().interpolate((external_d3_default()).interpolateLab).domain(self.customColors.domain).range(self.customColors.range);
      }
      var changeColors = function changeColors(moleculeColors, d, scale) {
        if (moleculeColors.hasOwnProperty(d.num)) {
          var val = parseFloat(moleculeColors[d.num]);
          if (isNaN(val)) {
            // passed in color is not a scalar, so
            // treat it as a color
            return moleculeColors[d.num];
          } else {
            // the user passed in a float, let's use a colormap
            // to convert it to a color
            return scale(val);
          }
        } else {
          return 'white';
        }
      };
      nodes.style('fill', function (d) {
        if (typeof self.customColors == 'undefined' || !self.customColors.hasOwnProperty('colorValues')) {
          return 'white';
        }
        if (self.customColors.colorValues.hasOwnProperty(d.structName) && self.customColors.colorValues[d.structName].hasOwnProperty(d.num)) {
          // if a molecule name is specified, it supercedes the default colors
          // (for which no molecule name has been specified)
          var moleculeColors = self.customColors.colorValues[d.structName];
          return changeColors(moleculeColors, d, scale);
        } else if (self.customColors.colorValues.hasOwnProperty('')) {
          var _moleculeColors = self.customColors.colorValues[''];
          return changeColors(_moleculeColors, d, scale);
        }
        return 'white';
      });
    }
  };
  var updateStyle = function updateStyle() {
    // Numbering
    visNodes.selectAll('[node_type=label]').classed((fornac_default()).transparent, !self.displayParameters.displayNumbering);
    visNodes.selectAll('[label_type=label]').classed((fornac_default()).transparent, !self.displayParameters.displayNumbering);
    visLinks.selectAll('[link_type=label_link]').classed((fornac_default()).transparent, !self.displayParameters.displayNumbering);
    // Node Outline
    svg.selectAll('[node_type=nucleotide]').classed((fornac_default()).transparent, !self.displayParameters.displayNodeOutline);
    // Node Labels
    visNodes.selectAll('[label_type=nucleotide]').classed((fornac_default()).transparent, !self.displayParameters.displayNodeLabel);
    // Links
    svg.selectAll('[link_type=real],[link_type=basepair],[link_type=backbone],[link_type=pseudoknot],[link_type=protein_chain],[link_type=chain_chain],[link_type=external]').classed((fornac_default()).transparent, !self.displayParameters.displayLinks);
    // Pseudoknot Links
    svg.selectAll('[link_type=pseudoknot]').classed((fornac_default()).transparent, !self.displayParameters.displayPseudoknotLinks);
    // Protein Links
    svg.selectAll('[link_type=protein_chain]').classed((fornac_default()).transparent, !self.displayParameters.displayProteinLinks);
    // Fake Links
    visLinks.selectAll('[link_type=fake]').classed((fornac_default()).transparent, !self.options.displayAllLinks);
    visLinks.selectAll('[link_type=fake_fake]').classed((fornac_default()).transparent, !self.options.displayAllLinks);
    // direction Arrows
    svg.selectAll('.' + (fornac_default()).directionArrow).classed((fornac_default()).transparent, !self.displayParameters.displayDirectionArrows);
  };

  /* RNA edditing related functions */
  var changeNode = function changeNode(nodeName, referenceNode) {
    // change the label of a node
    var rna = referenceNode.rna;
    var dotbracket = rnaUtilities.pairtableToDotbracket(rna.pairtable);
    var positions = rna.getPositions('nucleotide');
    var sequence = rna.seq;
    var uids = rna.getUids();
    var newNodeNum = referenceNode.num;
    var newDotbracket = dotbracket;
    var newSequence = sequence.slice(0, newNodeNum - 1) + nodeName + sequence.slice(newNodeNum);
    console.log('newSequence:', newSequence);
    console.log('uids:', uids);
    uids.splice(newNodeNum - 1, 1, node_modules_slugid.nice());
    var newPositions = positions;
    delete self.rnas[rna.uid];
    var newRNA = self.addRNA(newDotbracket, {
      'sequence': newSequence,
      'positions': newPositions,
      'uids': uids,
      'centerView': false
    });
  };
  var insertNodeBeforeOrAfter = function insertNodeBeforeOrAfter(nodeName, referenceNode, positionOffset) {
    //insert a new node before or after another one
    //positionOffset specifies who far from the original to insert the new node
    var rna = referenceNode.rna;
    var dotbracket = rnaUtilities.pairtableToDotbracket(rna.pairtable);
    var positions = rna.getPositions('nucleotide');
    var sequence = rna.seq;
    var uids = rna.getUids();
    var newNodeNum = referenceNode.num + positionOffset;
    var newDotbracket = dotbracket.slice(0, newNodeNum) + '.' + dotbracket.slice(newNodeNum);
    var newSequence = sequence.slice(0, newNodeNum) + nodeName + sequence.slice(newNodeNum);
    console.log('newSequence:', newSequence);
    uids.splice(newNodeNum, 0, node_modules_slugid.nice());
    positions.splice(newNodeNum, 0, positions[newNodeNum - positionOffset - 1]);
    var newUids = uids;
    var newPositions = positions;
    console.log('positions:', positions);
    console.log('new node positions:', newPositions);
    delete self.rnas[rna.uid];
    var newRNA = self.addRNA(newDotbracket, {
      'sequence': newSequence,
      'positions': newPositions,
      'uids': newUids,
      'centerView': false
    });
  };
  var deleteNode = function deleteNode(node) {
    console.log('deleting...', node);
    // get the dotbracket string for this rna
    var rna = node.rna;
    var pair = rna.pairtable[node.num];

    // remove basepairs for this node
    if (pair != 0) {
      rna.pairtable[node.num] = 0;
      rna.pairtable[pair] = 0;
    }
    var dotbracket = rnaUtilities.pairtableToDotbracket(rna.pairtable);
    var positions = rna.getPositions('nucleotide');
    var sequence = rna.seq;
    var uids = rna.getUids();
    var newDotbracket = dotbracket.slice(0, node.num - 1) + dotbracket.slice(node.num);
    var newPositions = positions.slice(0, node.num - 1).concat(positions.slice(node.num));
    var newSequence = sequence.slice(0, node.num - 1) + sequence.slice(node.num);
    var newUids = uids.slice(0, node.num - 1).concat(uids.slice(node.num));
    delete self.rnas[rna.uid];
    var newRNA = self.addRNA(newDotbracket, {
      'sequence': newSequence,
      'positions': newPositions,
      'uids': newUids,
      'centerView': false
    });
    console.log('new dotbracket:', newDotbracket);
    //recalculateGraph();

    //remove backbone links associated with this node

    //remove this node
  };

  var elementKey = function elementKey(d) {
    return d.uid;
  };
  var updateRnaGraph = function updateRnaGraph(r) {
    var nucleotidePositions = r.getPositions('nucleotide');
    var labelPositions = r.getPositions('label');
    var uids = r.getUids();
    r.recalculateElements().elementsToJson().addPseudoknots().addPositions('nucleotide', nucleotidePositions).addUids(uids).addLabels(1, self.options.labelInterval).addPositions('label', labelPositions).reinforceStems().reinforceLoops().updateLinkUids();
  };
  var removeBackBoneLink = function removeBackBoneLink(d) {
    if (d.target.num - d.source.num != 1) {
      console.log('ERROR: non adjacent nodes. Target:', d.target, 'Source:', d.source, 'Link:', d);
      return;
    }
    var rna = d.target.rna;
    var toRemove = [];
    for (var i = 0; i < rna.links.length; i++) {
      var _link = rna.links[i];
      if (_link.linkType != 'basepair') continue;
      if (_link.source.num <= d.source.num && _link.target.num >= d.target.num) {
        console.log('crossing basepair', _link);
        toRemove.push(_link);
      }
    }

    // Remove all base pairs that are between these two nodes and add them as extra
    // links
    console.log('toRemove:', toRemove);
    for (var _i2 = 0; _i2 < toRemove.length; _i2++) {
      rna.pairtable[toRemove[_i2].source.num] = 0;
      rna.pairtable[toRemove[_i2].target.num] = 0;
      toRemove[_i2].from = toRemove[_i2].source.num;
      toRemove[_i2].to = toRemove[_i2].target.num - d.source.num;
    }

    // extract the dotbracket string of the rna
    // cut it at the position of this backbone bond
    var sequence = rna.seq;
    var sequence1 = rna.seq.slice(0, d.source.num);
    var sequence2 = rna.seq.slice(d.source.num);
    var rnaDotBracket = rnaUtilities.pairtableToDotbracket(rna.pairtable);
    var dotBracket1 = rnaDotBracket.slice(0, d.source.num);
    var dotBracket2 = rnaDotBracket.slice(d.source.num);

    // get the nucleotide positions
    // cut them at the positions of the backbone bond
    var positions = rna.getPositions('nucleotide');
    var uids = rna.getUids();
    var positions1 = positions.slice(0, d.source.num);
    var positions2 = positions.slice(d.source.num);
    var uids1 = uids.slice(0, d.source.num);
    var uids2 = uids.slice(d.source.num);
    console.log('positions1:', positions1);
    console.log('positions2:', positions2);
    delete self.rnas[rna.uid];
    var rna1 = self.addRNA(dotBracket1, {
      'sequence': sequence1,
      'positions': positions1,
      'uids': uids1
    });
    var rna2 = self.addRNA(dotBracket2, {
      'sequence': sequence2,
      'positions': positions2,
      'uids': uids2
    });
    for (var _i3 = 0; _i3 < toRemove.length; _i3++) {
      console.log('rna1:', rna1);
      console.log('rna2:', rna2);
      console.log('toRemove[i]', toRemove[_i3]);
      self.extraLinks.push({
        'source': rna1.nodes[toRemove[_i3].from - 1],
        'target': rna2.nodes[toRemove[_i3].to - 1],
        'value': 1,
        'uid': node_modules_slugid.nice(),
        'linkType': 'intermolecule'
      });
      recalculateGraph();
      self.update();
    }
    console.log('self.extraLinks:', self.extraLinks);
    //self.extraLinks.push({'source': rna1.nodes[

    // create two new rnas
    // add their positions
    // add them back to the plot
  };

  var removeLink = function removeLink(d) {
    // remove a link between two nodes
    var index = self.graph.links.indexOf(d);
    console.log('removing link:', index);
    if (index > -1) {
      //remove a link
      //graph.links.splice(index, 1);

      // there should be two cases
      // 1. The link is within a single molecule

      if (d.source.rna == d.target.rna) {
        if (d.linkType == 'backbone') {
          console.log('trying to remove a backbone link', d.source.num, d.target.num);
          removeBackBoneLink(d);
          return;
        } else {
          var _r2 = d.source.rna;
          _r2.addPseudoknots();
          _r2.pairtable[d.source.num] = 0;
          _r2.pairtable[d.target.num] = 0;
          updateRnaGraph(_r2);
        }
      } else {
        // 2. The link is between two different molecules
        var extraLinkIndex = self.extraLinks.indexOf(d);
        self.extraLinks.splice(extraLinkIndex, 1);
      }
      recalculateGraph();
    }
    self.update();
  };
  var addBackBoneLink = function addBackBoneLink(newLink) {
    // opposite of deleting a link
    // get the two dotbracket strings
    var rna1 = newLink.target.rna;
    var rna2 = newLink.source.rna;
    if (newLink.target.num == 1) {
      rna1 = newLink.source.rna;
      rna2 = newLink.target.rna;
    }
    var dotbracket1 = rnaUtilities.pairtableToDotbracket(rna1.pairtable);
    var dotbracket2 = rnaUtilities.pairtableToDotbracket(rna2.pairtable);
    var seq1 = rna1.seq;
    var seq2 = rna2.seq;
    var positions1 = rna1.getPositions('nucleotide');
    var positions2 = rna2.getPositions('nucleotide');

    // concatenate them
    var newDotbracket = dotbracket1 + dotbracket2;
    var newSeq = seq1 + seq2;
    var newPositions = positions1.concat(positions2);
    var toAddInternal = [];
    var toAddExternal = [];
    var toDelete = {};
    for (var i = 0; i < self.extraLinks.length; i++) {
      console.log('self.extraLinks[i]', self.extraLinks[i]);
      console.log('rna1:', rna1);
      console.log('rna2:', rna2);
      if (self.extraLinks[i].source.rna == rna1) {
        if (self.extraLinks[i].target.rna == rna2) {
          // both ends of the extra link are within what will become the new molecule
          // need to be added as base pairs afterwards
          //self.extraLinks[i].from = self.extraLinks[i].source.num;
          //self.extraLinks[i].to = dotbracket1.length + self.extraLinks[i].target.num;
          //toAddInternal.push(self.extraLinks[i]);
        } else {
          // only one end of the extra link is within what will become the newly
          // created molecule, needs to remain an extra link
          // source will always be the unchanged molecule, whereas target will be
          // the newly created one
          toAddExternal.push({
            'source': self.extraLinks[i].target,
            'target': self.extraLinks[i].source.num
          });
          toDelete[self.extraLinks[i].uid] = true;
        }
      } else if (self.extraLinks[i].source.rna == rna2) {
        if (self.extraLinks[i].target.rna == rna1) {
          // add internal link
          // both ends of the extra link are within what will become the new molecule
          // need to be added as base pairs afterwards
          //self.extraLinks[i].from = self.extraLinks[i].target.num;
          //self.extraLinks[i].to = dotbracket1.length + self.extraLinks[i].source.num;

          //toAddInternal.push(self.extraLinks[i]);
        } else {
          toAddExternal.push({
            'source': self.extraLinks[i].target,
            'target': self.extraLinks[i].source.num + dotbracket1.length
          });
          toDelete[self.extraLinks[i].uid] = true;
        }
      }
      if (self.extraLinks[i].target.rna == rna1) {
        if (self.extraLinks[i].source.rna == rna2) {
          // covered in previous if statement
        } else {
          // only one end of the extra link is within what will become the newly
          // created molecule, needs to remain an extra link
          toAddExternal.push({
            'source': self.extraLinks[i].source,
            'target': self.extraLinks[i].target.num
          });
          toDelete[self.extraLinks[i].uid] = true;
        }
      } else if (self.extraLinks[i].target.rna == rna2) {
        if (self.extraLinks[i].source.rna == rna1) {
          toAddExternal.push({
            'source': self.extraLinks[i].source,
            'target': self.extraLinks[i].target.num + dotbracket1.length
          });
          toDelete[self.extraLinks[i].uid] = true;
        }
      }
    }
    self.extraLinks = self.extraLinks.filter(function (e) {
      return !(e.uid in toDelete);
    });
    delete self.rnas[rna1.uid];
    delete self.rnas[rna2.uid];
    var newRna = null;
    // create a new RNA
    if (self.options.animation) newRna = self.addRNA(newDotbracket, {
      'sequence': newSeq,
      'positions': newPositions,
      'centerView': false
    });else newRna = self.addRNA(newDotbracket, {
      'sequence': newSeq,
      'centerView': false
    });

    // add new external links
    for (var _i4 = 0; _i4 < toAddExternal.length; _i4++) {
      self.extraLinks.push({
        'source': toAddExternal[_i4].source,
        'target': newRna.nodes[toAddExternal[_i4].target - 1],
        'value': 1,
        'uid': node_modules_slugid.nice(),
        'linkType': 'intermolecule'
      });
    }
    recalculateGraph();
    self.update();
    console.log('self.extraLinks:', self.extraLinks);
  };
  function nudge(dx, dy) {
    // TODO currently unused
    node.filter(function (d) {
      return d.selected;
    }).attr('cx', function (d) {
      return d.x += dx;
    }).attr('cy', function (d) {
      return d.y += dy;
    });
    link.filter(function (d) {
      return d.source.selected;
    }).attr('x1', function (d) {
      return d.source.x;
    }).attr('y1', function (d) {
      return d.source.y;
    });
    link.filter(function (d) {
      return d.target.selected;
    }).attr('x2', function (d) {
      return d.target.x;
    }).attr('y2', function (d) {
      return d.target.y;
    });
    external_d3_default().event.preventDefault();
  }
  var nodeMouseup = function nodeMouseup(d, i) {
    console.log("nodeMouseup");
    var backbonePossible = true,
      basepairPossible = true;
    if (mousedownNode) {
      mouseupNode = d;

      // if the node isn't a nucleotide, we can't create a link
      if (mouseupNode.nodeType == 'middle' || mousedownNode.nodeType == 'middle' || mouseupNode.nodeType == 'label' || mousedownNode.nodeType == 'label') return;
      if (mouseupNode == mousedownNode) {
        resetMouseVars();
        return;
      }
      var newLink = {
        source: mousedownNode,
        target: mouseupNode,
        linkType: 'basepair',
        value: 1,
        uid: node_modules_slugid.nice()
      };
      for (var _i5 = 0; _i5 < self.graph.links.length; _i5++) {
        if (self.graph.links[_i5].source == mousedownNode || self.graph.links[_i5].target == mousedownNode || self.graph.links[_i5].source == mouseupNode || self.graph.links[_i5].target == mouseupNode) {
          // either one of the nodes is already in a link

          // if any of the nodes are already involved in a basepair or a pseudoknot
          // then we can't make a basepair link
          if (self.graph.links[_i5].linkType == 'basepair' || self.graph.links[_i5].linkType == 'pseudoknot' || self.graph.links[_i5].linkType == 'intermolecule') {
            // although should be able to make a backbone link
            console.log('no basepair possible');
            basepairPossible = false;
          }
        }
        if (self.graph.links[_i5].source == mouseupNode && self.graph.links[_i5].target == mousedownNode || self.graph.links[_i5].source == mousedownNode && self.graph.links[_i5].target == mouseupNode) {
          // if we're trying to make a link between two nodes which already have
          // a backbone between them, then we can't make a link
          if (self.graph.links[_i5].linkType == 'backbone') {
            return;
          }
        }
      }
      if (newLink.source.rna != newLink.target.rna) {
        // could be either a backbone link or an intermolecule link

        if (newLink.source.num == 1 && newLink.target.num == newLink.target.rna.rnaLength || newLink.target.num == 1 && newLink.source.num == newLink.source.rna.rnaLength) {
          //
          var linkMenu = [{
            title: 'Backbone Link',
            action: function action(elm, d, i) {
              linkContextMenuShown = false;
              console.log('Item #1 clicked!');
              console.log('The data for this circle is: ' + d);
              dragLine.attr('class', (fornac_default()).transparent);
              addBackBoneLink(newLink);
            },
            disabled: false // optional, defaults to false
          }, {
            title: 'Basepair Link',
            action: function action(elm, d, i) {
              linkContextMenuShown = false;
              console.log('You have clicked the second item!');
              console.log('The data for this circle is: ' + d);
              dragLine.attr('class', (fornac_default()).transparent);
              self.addLink(newLink);
            }
          }];
          linkContextMenuShown = true;
          var linkContextMenu = contextMenu(linkMenu);
          console.log('newLinkMenu');
          linkContextMenu.apply(this, [d, i, true, function () {
            dragLine.attr('class', (fornac_default()).transparent);
          }]);
        } else {
          // between end points but can't make a backbone
          if (basepairPossible) self.addLink(newLink);
        }
      } else {
        if (basepairPossible) self.addLink(newLink);
      }
    }
  };
  var nodeMousedown = function nodeMousedown(d) {
    console.log("nodeMousedown");
    if (!d.selected && !ctrlKeydown) {
      // if this node isn't selected, then we have to unselect every other node
      deselectAllNodes();
    }
    if (!shiftKeydown) {
      // only without shift, toggle select or select
      if (ctrlKeydown) {
        toggleSelectNode(d);
      } else {
        selectNode(d);
      }
    }
    if (shiftKeydown && self.options.editable) {
      // with shift key and editable continue to draw dragline
      mousedownNode = d;
      dragLine.attr('class', (fornac_default()).dragLine).attr('x1', mousedownNode.x).attr('y1', mousedownNode.y).attr('x2', mousedownNode.x).attr('y2', mousedownNode.y);
      external_d3_default().event.stopPropagation();
    }
  };
  var linkClick = function linkClick(d) {
    if (!shiftKeydown) {
      return;
    }
    var invalidLinks = {
      //'backbone': true,
      'fake': true,
      'fake_fake': true,
      'label_link': true
    };
    console.log('d.linkType:', d.linkType);
    if (d.linkType in invalidLinks) return;
    removeLink(d);
  };

  /* I/O functions */
  self.toJSON = function toJSON() {
    var data = {
      'rnas': self.rnas,
      'extraLinks': self.extraLinks
    };
    var dataString = JSON.stringify(data, function (key, value) {
      //remove circular references
      if (key == 'rna') {
        return;
      } else {
        return value;
      }
    }, '\t');
    return dataString;
  };
  self.fromJSON = function (jsonString) {
    var rnas, extraLinks;
    try {
      var data = JSON.parse(jsonString);
      rnas = data.rnas;
      extraLinks = data.extraLinks;
    } catch (err) {
      throw err;
    }
    for (var uid in rnas) {
      if (rnas[uid].type == 'rna') {
        r = new RNAGraph();
        r.seq = rnas[uid].seq;
        r.dotbracket = rnas[uid].dotbracket;
        r.circular = rnas[uid].circular;
        r.pairtable = rnas[uid].pairtable;
        r.uid = rnas[uid].uid;
        r.structName = rnas[uid].structName;
        r.nodes = rnas[uid].nodes;
        r.links = rnas[uid].links;
        r.rnaLength = rnas[uid].rnaLength;
        r.elements = rnas[uid].elements;
        r.nucsToNodes = rnas[uid].nucsToNodes;
        r.pseudoknotPairs = rnas[uid].pseudoknotPairs;
      } else {
        r = new ProteinGraph();
        r.size = rnas[uid].size;
        r.nodes = rnas[uid].nodes;
        r.uid = rnas[uid].uid;
      }
      self.addRNAJSON(r, false);
    }
    extraLinks.forEach(function (link) {
      self.extraLinks.push(link);
    });
    recalculateGraph();
    self.update();
  };
  self.addRNA = function (structure) {
    var passedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rnaJson = createInitialLayout(structure, passedOptions);
    var centerView = false;

    /*
     * Code to display the JSONs representing the structure
     *
    rnaJson.nodes[0].rna = null;
    rnaJson.nodes[0].nextNode = null;
     rnaJson.links[0].source = null;
    rnaJson.links[0].target = null;
     console.log(rnaJson.nodes[0]);
    console.log(rnaJson.links[0]);
    console.log(JSON.stringify(rnaJson.nodes[0],null,2));
    console.log(JSON.stringify(rnaJson.links[0],null,2));
    */

    if ('extraLinks' in passedOptions) {
      // presumably the passed in links are within the passed molecule
      var newLinks = self.addExternalLinks(rnaJson, passedOptions.extraLinks);
      self.extraLinks = self.extraLinks.concat(newLinks);
    }
    if ('centerPos' in passedOptions) self.addRNAJSON(rnaJson, {
      centerPos: passedOptions.centerPos,
      centerView: false
    });else if ('avoidOthers' in passedOptions) self.addRNAJSON(rnaJson, {
      avoidOthers: passedOptions.avoidOthers
    });else self.addRNAJSON(rnaJson, {
      centerView: passedOptions.centerView
    });
    return rnaJson;
  };
  self.addRNAJSON = function (rnaGraph, _ref) {
    var _ref$avoidOthers = _ref.avoidOthers,
      avoidOthers = _ref$avoidOthers === void 0 ? false : _ref$avoidOthers,
      _ref$centerPos = _ref.centerPos,
      centerPos = _ref$centerPos === void 0 ? null : _ref$centerPos,
      _ref$centerView = _ref.centerView,
      centerView = _ref$centerView === void 0 ? true : _ref$centerView;
    // Add an RNAGraph, which contains nodes and links as part of the
    // structure
    // Each RNA will have uid to identify it
    // when it is modified, it is replaced in the global list of RNAs
    //
    var maxX, minX;
    //console.log('centerView:', centerView);

    if (centerPos != null) {
      // center the newly created RNA at a given position
      var totalX = 0;
      var totalY = 0;
      var nodeCount = 0;
      rnaGraph.nodes.forEach(function (node) {
        totalX += node.x;
        totalY += node.y;
        nodeCount += 1;
      });
      if (nodeCount > 0) {
        // center the nodes at centerPos

        rnaGraph.nodes.forEach(function (node) {
          node.x = node.x + centerPos[0] - totalX / nodeCount;
          node.y = node.y + centerPos[1] - totalY / nodeCount;
          node.px = node.x;
          node.py = node.y;
        });
      }
    }
    if (avoidOthers) {
      if (self.graph.nodes.length > 0) maxX = external_d3_default().max(self.graph.nodes.map(function (d) {
        return d.x;
      }));else maxX = 0;
      minX = external_d3_default().min(rnaGraph.nodes.map(function (d) {
        return d.x;
      }));
      rnaGraph.nodes.forEach(function (node) {
        node.x += maxX - minX + 20;
        node.px += maxX - minX;
      });
    }
    rnaGraph.nodes.forEach(function (node) {
      node.rna = rnaGraph;
    });
    self.rnas[rnaGraph.uid] = rnaGraph;
    recalculateGraph();
    self.update();
    if (centerView) self.centerView();
    return rnaGraph;
  };
  self.addNodes = function addNodes(json) {
    // add a new set of nodes from a json file

    // Resolve the sources and targets of the links so that they
    // are not just indeces into an array
    json.links.forEach(function (entry) {
      if (typeof entry.source == 'number') entry.source = json.nodes[entry.source];
      if (typeof entry.target == 'number') entry.target = json.nodes[entry.target];
    });

    // Get the maximum x and y values of the current graph
    // so that we don't place a new structure on top of the
    // old one
    if (self.graph.nodes.length > 0) {
      maxX = external_d3_default().max(self.graph.nodes.map(function (d) {
        return d.x;
      }));
      maxY = external_d3_default().max(self.graph.nodes.map(function (d) {
        return d.y;
      }));
    } else {
      maxX = 0;
      maxY = 0;
    }
    json.nodes.forEach(function (entry) {
      if (!(entry.rna.uid in self.rnas)) {
        self.rnas[entry.rna.uid] = entry.rna;
      }
      entry.x += maxX;
      //entry.y += maxY;

      entry.px += maxX;
      //entry.py += maxY;
    });

    r = new RNAGraph('', '');
    r.nodes = json.nodes;
    r.links = json.links;

    //self.addRNA(r);
    recalculateGraph();
    self.update();
    self.centerView();
  };
  self.clearNodes = function () {
    self.graph.nodes = [];
    self.graph.links = [];
    self.rnas = {};
    self.extraLinks = [];
    self.update();
  };
  self.addLink = function (newLink) {
    // this means we have a new json, which means we have
    // to recalculate the structure and change the colors
    // appropriately
    //
    console.log('adding new link');
    if (newLink.source.rna == newLink.target.rna) {
      // must be a basepair
      var _r3 = newLink.source.rna;
      _r3.pairtable[newLink.source.num] = newLink.target.num;
      _r3.pairtable[newLink.target.num] = newLink.source.num;
      updateRnaGraph(_r3);
    } else {
      //Add an extra link
      console.log('intermolecule');
      newLink.linkType = 'intermolecule';
      self.extraLinks.push(newLink);
    }
    recalculateGraph();
    self.update();
  };
  self.addExternalLinks = function (rnaJson, externalLinks) {
    var newLinks = [];
    for (var i = 0; i < externalLinks.length; i++) {
      var newLink = {
        linkType: 'external',
        value: 1,
        uid: node_modules_slugid.nice(),
        source: null,
        target: null
      };
      // check if the source node is an array
      if (Object.prototype.toString.call(externalLinks[i][0]) === '[object Array]') {
        for (var j = 0; j < rnaJson.nodes.length; j++) {
          if ('nucs' in rnaJson.nodes[j]) {
            if (rnaJson.nodes[j].nucs.equals(externalLinks[i][0])) {
              newLink.source = rnaJson.nodes[j];
              break;
            }
          }
        }
      } else {
        for (var _j = 0; _j < rnaJson.nodes.length; _j++) {
          if (rnaJson.nodes[_j].num == externalLinks[i][0]) {
            newLink.source = rnaJson.nodes[_j];
          }
        }
      }

      // check if the target node is an array
      if (Object.prototype.toString.call(externalLinks[i][1]) === '[object Array]') {
        for (var _j2 = 0; _j2 < rnaJson.nodes.length; _j2++) {
          if ('nucs' in rnaJson.nodes[_j2]) {
            if (rnaJson.nodes[_j2].nucs.equals(externalLinks[i][1])) {
              newLink.target = rnaJson.nodes[_j2];
            }
          }
        }
      } else {
        for (var _j3 = 0; _j3 < rnaJson.nodes.length; _j3++) {
          if (rnaJson.nodes[_j3].num == externalLinks[i][1]) {
            newLink.target = rnaJson.nodes[_j3];
          }
        }
      }
      if (newLink.source == null || newLink.target == null) {
        console.log('ERROR: source or target of new link not found:', newLink, externalLinks[i]);
        continue;
      }
      newLinks.push(newLink);
    }
    return newLinks;
  };
  self.getStructuresDotBracket = function () {
    console.log('self.rnas:', self.rnas);
    var sequence = [];
    var currIdx = 1;
    var nodeIdxs = {};
    var breaks = [];
    var pairtable = [];

    // add the nodes
    for (var uid in self.rnas) {
      var rna = self.rnas[uid];
      for (var j = 0; j < rna.nodes.length; j++) {
        var _node = rna.nodes[j];
        if (_node.nodeType != 'nucleotide') continue;
        console.log('node:', _node);
        nodeIdxs[_node.uid] = currIdx;
        currIdx += 1;
        sequence.push(_node.name);
      }
      breaks.push(currIdx);
    }
    pairtable = [currIdx - 1];
    for (var i = 0; i < currIdx; i++) pairtable.push(0);

    // add the links
    for (var _uid in self.rnas) {
      var _rna = self.rnas[_uid];
      for (var _j4 = 0; _j4 < _rna.links.length; _j4++) {
        var _link2 = _rna.links[_j4];
        if (_link2.linkType != 'basepair') continue;
        var idx1 = nodeIdxs[_link2.source.uid];
        var idx2 = nodeIdxs[_link2.target.uid];
        pairtable[idx1] = idx2;
        pairtable[idx2] = idx1;
      }
    }
    for (var _i6 = 0; _i6 < self.extraLinks.length; _i6++) {
      var _link3 = self.extraLinks[_i6];
      var _idx = nodeIdxs[_link3.source.uid];
      var _idx2 = nodeIdxs[_link3.target.uid];
      pairtable[_idx] = _idx2;
      pairtable[_idx2] = _idx;
    }
    var structure = rnaUtilities.pairtableToDotbracket(pairtable).split('');
    for (var _i7 = 0; _i7 < breaks.length - 1; _i7++) {
      console.log('breaks[i]:', breaks[_i7]);
      sequence.splice(breaks[_i7] + _i7 - 1, 0, '&');
      structure.splice(breaks[_i7] + _i7 - 1, 0, '&');
    }
    console.log('sequence:', sequence, sequence.join(''));
    console.log('structure:', structure, structure.join(''));
    return [sequence.join(''), structure.join('')];
  };

  /* APIs */
  self.startAnimation = function () {
    self.options.animation = true;
    vis.selectAll('g.gnode').call(drag);
    self.force.start();
  };
  self.stopAnimation = function () {
    self.options.animation = false;
    vis.selectAll('g.gnode').on('mousedown.drag', null);
    self.force.stop();
  };
  self.resumeForce = function () {
    if (self.options.animation) self.force.resume();
  };
  self.setFriction = function (value) {
    self.force.friction(value);
    self.resumeForce();
  };
  self.setCharge = function (value) {
    self.force.charge(value);
    self.resumeForce();
  };
  self.setGravity = function (value) {
    self.force.gravity(value);
    self.resumeForce();
  };
  self.setPseudoknotStrength = function (value) {
    self.linkStrengths.pseudoknot = value;
    self.update();
  };
  self.displayNumbering = function (value) {
    self.displayParameters.displayNumbering = value;
    updateStyle();
  };
  self.displayNodeOutline = function (value) {
    self.displayParameters.displayNodeOutline = value;
    updateStyle();
  };
  self.displayNodeLabel = function (value) {
    self.displayParameters.displayNodeLabel = value;
    updateStyle();
  };
  self.displayLinks = function (value) {
    self.displayParameters.displayLinks = value;
    updateStyle();
  };
  self.displayPseudoknotLinks = function (value) {
    self.displayParameters.displayPseudoknotLinks = value;
    updateStyle();
  };
  self.displayProteinLinks = function (value) {
    self.displayParameters.displayProteinLinks = value;
    updateStyle();
  };
  self.displayDirectionArrows = function (value) {
    self.displayParameters.displayDirectionArrows = value;
    updateStyle();
  };
}
;// CONCATENATED MODULE: ./src/rnaplot.js




function rnaPlot() {
  var passedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = {
    'width': 300,
    'height': 300,
    'nucleotideRadius': 5,
    'rnaEdgePadding': 1,
    // how far the leftmost, rightmost, topmost and bottomost
    // nucleotides are from the edge of the plot
    'labelInterval': 10,
    'showNucleotideLabels': true,
    'startNucleotideNumber': 1,
    'bundleExternalLinks': false,
    'rnaLayout': 'simple',
    // simple or naview
    'namePosition': '0 0' // for x and y either 0, 0.5 or 1
  };

  var options = Object.assign(options, passedOptions);
  var xScale, yScale;
  function createTransformToFillViewport(xValues, yValues) {
    // create transform that will scale the x and y values so that
    // they fill the available viewport
    var xExtent = d3.extent(xValues);
    var yExtent = d3.extent(yValues);

    // add the radius of the nucleotides
    xExtent[0] -= options.nucleotideRadius + options.rnaEdgePadding;
    yExtent[0] -= options.nucleotideRadius + options.rnaEdgePadding;
    xExtent[1] += options.nucleotideRadius + options.rnaEdgePadding;
    yExtent[1] += options.nucleotideRadius + options.rnaEdgePadding;

    // find out how wide and height the molecule
    var xRange = xExtent[1] - xExtent[0];
    var yRange = yExtent[1] - yExtent[0];

    // how much wider / taller is it than the available viewport
    var xExtra = xRange - options.width;
    var yExtra = yRange - options.height;

    // once we have a scale for one dimension, we can create the scale for the other
    // keeping the same expansion / shrinking ratio
    function createOtherScale(firstScale, newDomain, newRange) {
      var scaleFactor = (firstScale.range()[1] - firstScale.range()[0]) / (firstScale.domain()[1] - firstScale.domain()[0]);
      var newWidth = (newDomain[1] - newDomain[0]) * scaleFactor;
      var newMargin = (newRange[1] - newRange[0] - newWidth) / 2;
      return {
        'scaleFactor': scaleFactor,
        'scale': d3.scale.linear().domain(newDomain).range([newRange[0] + newMargin, newRange[1] - newMargin])
      };
    }
    var ret;
    if (xExtra > yExtra) {
      // we have to shrink more in the x-dimension than the y
      xScale = d3.scale.linear().domain(xExtent).range([0, options.width]);
      ret = createOtherScale(xScale, yExtent, [0, options.height]);
      yScale = ret.scale;
    } else {
      // we have to shrink more in the x-dimension than the y
      yScale = d3.scale.linear().domain(yExtent).range([0, options.height]);
      ret = createOtherScale(yScale, xExtent, [0, options.width]);
      xScale = ret.scale;
    }
    var xOffset = xScale.range()[0] - xScale.domain()[0];
    var yOffset = yScale.range()[0] - yScale.domain()[0];
    return 'translate(' + -(xScale.domain()[0] * ret.scaleFactor - xScale.range()[0]) + ',' + -(yScale.domain()[0] * ret.scaleFactor - yScale.range()[0]) + ')' + 'scale(' + ret.scaleFactor + ')';
  }
  function createNucleotides(selection, nucleotideNodes) {
    // create groupings for each nucleotide and label
    var gs = selection.selectAll('.gnode').data(nucleotideNodes).enter().append('svg:g').classed('gnode', true).attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
    var circles = gs.append('svg:circle').classed((fornac_default()).node, true).attr('node_type', 'nucleotide').attr('base_type', function (d) {
      if (d.name) {
        return d.name.toLowerCase();
      }
    }).attr('r', options.nucleotideRadius);
    if (options.showNucleotideLabels) {
      var nucleotideLabels = gs.append('svg:text').text(function (d) {
        return d.name;
      }).classed((fornac_default()).nodeLabel, true).append('svg:title').text(function (d) {
        return d.struct_name + ':' + d.num;
      });
    }
  }
  function createLabels(selection, labelNodes) {
    // create groupings for each nucleotide and label

    var gs = selection.selectAll().data(labelNodes).enter().append('svg:g').classed('gnode', true).attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
    var circles = gs.append('svg:circle').classed((fornac_default()).node, true).attr('node_type', 'label').attr('r', options.nucleotideRadius);
    var numberLabels = gs.append('svg:text').classed((fornac_default()).nodeLabel, true).text(function (d) {
      return d.name;
    });
  }
  function createName(selection, name) {
    var nameLabel = selection.append('svg:text')
    //.attr('dy', -10)
    .classed((fornac_default()).plotLabel, true).text(name);
    var xyPos = options.namePosition.split(" ", 2); // 0 0.5 1
    var xy = [];
    var textBBox = nameLabel.node().getBBox();
    var textSize = [textBBox.width, textBBox.height];
    var plotSize = [options.width, options.height];
    for (var p in [0, 1]) {
      switch (xyPos[p]) {
        case '0':
          xy[p] = textSize[p] / 2;
          break;
        case '1':
          xy[p] = plotSize[p] - textSize[p] / 2;
          break;
        case '0.5':
          xy[p] = plotSize[p] / 2;
          break;
      }
    }
    nameLabel.attr('x', xy[0]).attr('y', xy[1]);
  }
  function makeExternalLinksBundle(selection, links) {
    var nodesDict = {};
    var linksList = [];
    links = links.filter(function (d) {
      return d.linkType == 'correct' || d.linkType == 'incorrect' || d.linkType == 'extra';
    });
    selection.selectAll('[link-type=extra]').remove();
    for (var i = 0; i < links.length; i++) {
      if (links[i].source === null || links[i].target === null) continue;
      nodesDict[links[i].source.uid] = links[i].source;
      nodesDict[links[i].target.uid] = links[i].target;
      linksList.push({
        'source': links[i].source.uid,
        'target': links[i].target.uid,
        'linkType': links[i].linkType,
        'extraLinkType': links[i].extraLinkType
      });
    }
    var fbundling = d3.ForceEdgeBundling().nodes(nodesDict).edges(linksList).compatibility_threshold(0.8).step_size(0.2);
    var results = fbundling();
    var d3line = d3.svg.line().x(function (d) {
      return d.x;
    }).y(function (d) {
      return d.y;
    }).interpolate('linear');
    for (var i = 0; i < results.length; i++) {
      var edge_subpoint_data = results[i];
      // for each of the arrays in the results
      // draw a line between the subdivions points for that edge

      selection.append('path').attr('d', d3line(edge_subpoint_data)).style('fill', 'none').attr('link-type', function (d) {
        return linksList[i].linkType;
      }).attr('extra-link-type', function (d) {
        return linksList[i].extraLinkType;
      }).style('stroke-opacity', 0.4); //use opacity as blending
    }
  }

  function createLinks(selection, links) {
    links = links.filter(function (d) {
      return d.source !== null && d.target !== null;
    });
    var gs = selection.selectAll('.link').data(links).enter().append('svg:line').attr('x1', function (d) {
      return d.source.x;
    }).attr('x2', function (d) {
      return d.target.x;
    }).attr('y1', function (d) {
      return d.source.y;
    }).attr('y2', function (d) {
      return d.target.y;
    }).attr('link-type', function (d) {
      return d.linkType;
    }).attr('extra-link-type', function (d) {
      return d.extraLinkType;
    }).classed('link', true).classed((fornac_default()).link, true);
  }
  function chart(selection) {
    selection.each(function (data) {
      var plot = d3.select(this).append('g').classed((fornac_default()).plot, true);

      // data should be a dictionary containing at least a structure
      // and possibly a sequence
      var rg = new RNAGraph(data.sequence, data.structure, data.name, options.startNucleotideNumber).recalculateElements().elementsToJson().addName(data.name);
      data.rnaGraph = rg;
      // calculate the position of each nucleotide
      // the positions of the labels will be calculated in
      // the addLabels function
      var positions = [];
      if (options.rnaLayout === 'naview') {
        var naview = new NAView();
        var naViewPositions = naview.naview_xy_coordinates(rg.pairtable);
        for (var i = 0; i < naViewPositions.nbase; i++) {
          positions.push([naViewPositions.x[i], naViewPositions.y[i]]);
        }
      } else {
        positions = simpleXyCoordinates(rg.pairtable);
      }
      rg.addPositions('nucleotide', positions)
      //.reinforceStems()
      //.reinforceLoops()
      //.addExtraLinks(data.extraLinks)
      .addLabels(options.startNucleotideNumber, options.labelInterval);

      // create a transform that will fit the molecule to the
      // size of the viewport (canvas, svg, whatever)
      var fillViewportTransform = createTransformToFillViewport(rg.nodes.map(function (d) {
        return d.x;
      }), rg.nodes.map(function (d) {
        return d.y;
      }));
      plot.attr('transform', fillViewportTransform);
      var nucleotideNodes = rg.nodes.filter(function (d) {
        return d.nodeType == 'nucleotide';
      });
      var labelNodes = rg.nodes.filter(function (d) {
        return d.nodeType == 'label';
      });
      var links = rg.links;
      createLinks(plot, links);
      createNucleotides(plot, nucleotideNodes);
      createLabels(plot, labelNodes);
      createName(d3.select(this), data.name);
      if (options.bundleExternalLinks) {
        makeExternalLinksBundle(plot, links);
      }
    });
  }
  chart.width = function (_) {
    if (!arguments.length) return options.width;
    options.width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return options.height;
    options.height = _;
    return chart;
  };
  chart.showNucleotideLabels = function (_) {
    if (!arguments.length) return options.showNucleotideLabels;
    options.showNucleotideLabels = _;
    return chart;
  };
  chart.rnaEdgePadding = function (_) {
    if (!arguments.length) return options.rnaEdgePadding;
    options.rnaEdgePadding = _;
    return chart;
  };
  chart.nucleotideRadius = function (_) {
    if (!arguments.length) return options.nucleotideRadius;
    options.nucleotideRadius = _;
    return chart;
  };
  chart.labelInterval = function (_) {
    if (!arguments.length) return options.labelInterval;
    options.labelInterval = _;
    return chart;
  };
  chart.showNucleotideLabels = function (_) {
    if (!arguments.length) return options.showNucleotideLabels;
    options.showNucleotideLabels = _;
    return chart;
  };
  chart.startNucleotideNumber = function (_) {
    if (!arguments.length) return options.startNucleotideNumber;
    options.startNucleotideNumber = _;
    return chart;
  };
  chart.bundleExternalLinks = function (_) {
    if (!arguments.length) return options.bundleExternalLinks;
    options.bundleExternalLinks = _;
    return chart;
  };
  chart.rnaLayout = function (_) {
    if (!arguments.length) return options.rnaLayout;
    options.rnaLayout = _;
    return chart;
  };
  chart.namePosition = function (_) {
    if (!arguments.length) return options.namePosition;
    options.namePosition = _;
    return chart;
  };
  return chart;
}
;// CONCATENATED MODULE: ./src/rnatreemap.js

function rnaTreemap() {
  var passedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = {
    'width': 300,
    'height': 300,
    'nucleotideRadius': 5,
    'rnaEdgePadding': 1,
    // how far the leftmost, rightmost, topmost and bottomost
    // nucleotides are from the edge of the plot
    'labelInterval': 10,
    'showNucleotideLabels': true,
    'startNucleotideNumber': 1,
    'bundleExternalLinks': false,
    'rnaLayout': 'simple',
    // simple or naview
    'namePosition': '0 0' // for x and y either 0, 0.5 or 1
  };

  var options = Object.assign(options, passedOptions);
  function rnaTreemapNode(selection) {
    // create a background rectangle for each RNA structure
    selection.each(function (d) {
      d3.select(this).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      }).append('rect').attr('fill', 'transparent').attr('width', function (d) {
        return Math.max(0, d.dx);
      }).attr('height', function (d) {
        return Math.max(0, d.dy);
      });

      // draw the actual RNA structure
      var chart = rnaPlot(options).width(Math.max(0, d.dx)).height(Math.max(0, d.dy));
      if ('structure' in d) d3.select(this).call(chart);
    });
  }
  var chart = function chart(selection) {
    selection.each(function (data) {
      console.log('data:', data);
      // initialize the treemap structure
      // sample input
      // { 'name': 'blah',
      // 'children: [{'structure': '..((..))',
      //               'sequence': 'ACCGGCC',
      //               'size': 50}]
      // }
      var treemap = d3.layout.treemap().size([options.width, options.height]).sticky(false).value(function (d) {
        return d.size;
      });

      // create a new <g> for each node in the treemap
      // this may be a little redundant, since we expect the calling
      // selection to contain their own g elements
      var gEnter = d3.select(this).append('g').classed('rnatreemap', true);
      var treemapGnodes = gEnter.datum(data).selectAll('.treemapnode').data(treemap.nodes).enter().append('g').classed('treemapnode', true).call(rnaTreemapNode);
    });
  };
  chart.width = function (_) {
    if (!arguments.length) return options.width;
    options.width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return options.height;
    options.height = _;
    return chart;
  };
  chart.showNucleotideLabels = function (_) {
    if (!arguments.length) return options.showNucleotideLabels;
    options.showNucleotideLabels = _;
    return chart;
  };
  chart.rnaEdgePadding = function (_) {
    if (!arguments.length) return options.rnaEdgePadding;
    options.rnaEdgePadding = _;
    return chart;
  };
  chart.nucleotideRadius = function (_) {
    if (!arguments.length) return options.nucleotideRadius;
    options.nucleotideRadius = _;
    return chart;
  };
  chart.labelInterval = function (_) {
    if (!arguments.length) return options.labelInterval;
    options.labelInterval = _;
    return chart;
  };
  chart.showNucleotideLabels = function (_) {
    if (!arguments.length) return options.showNucleotideLabels;
    options.showNucleotideLabels = _;
    return chart;
  };
  chart.startNucleotideNumber = function (_) {
    if (!arguments.length) return options.startNucleotideNumber;
    options.startNucleotideNumber = _;
    return chart;
  };
  chart.bundleExternalLinks = function (_) {
    if (!arguments.length) return options.bundleExternalLinks;
    options.bundleExternalLinks = _;
    return chart;
  };
  chart.rnaLayout = function (_) {
    if (!arguments.length) return options.rnaLayout;
    options.rnaLayout = _;
    return chart;
  };
  chart.namePosition = function (_) {
    if (!arguments.length) return options.namePosition;
    options.namePosition = _;
    return chart;
  };
  chart.zoom = function (_) {
    if (!arguments.length) return options.zoom;
    options.zoom = _;
    return chart;
  };
  return chart;
}
;// CONCATENATED MODULE: ./src/index.js




//export {ProteinGraph, RNAGraph, moleculesToJson} from './rnagraph.js';
//export {simpleXyCoordinates} from './simplernaplot.js';
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fornac.js.map