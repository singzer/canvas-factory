"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.pb = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: proto/canvas.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
var pb_1 = require("google-protobuf");
var grpc_1 = require("@grpc/grpc-js");
var pb;
(function (pb) {
    var ImgRequest = /** @class */ (function (_super) {
        __extends(ImgRequest, _super);
        function ImgRequest(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    _this.type = data.type;
                }
                if ("data" in data && data.data != undefined) {
                    _this.data = data.data;
                }
                if ("width" in data && data.width != undefined) {
                    _this.width = data.width;
                }
                if ("height" in data && data.height != undefined) {
                    _this.height = data.height;
                }
            }
            return _this;
        }
        Object.defineProperty(ImgRequest.prototype, "type", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImgRequest.prototype, "data", {
            get: function () {
                return pb_1.Message.getField(this, 2);
            },
            set: function (value) {
                pb_1.Message.setField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImgRequest.prototype, "width", {
            get: function () {
                return pb_1.Message.getField(this, 3);
            },
            set: function (value) {
                pb_1.Message.setField(this, 3, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImgRequest.prototype, "height", {
            get: function () {
                return pb_1.Message.getField(this, 4);
            },
            set: function (value) {
                pb_1.Message.setField(this, 4, value);
            },
            enumerable: false,
            configurable: true
        });
        ImgRequest.fromObject = function (data) {
            var message = new ImgRequest({});
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.width != null) {
                message.width = data.width;
            }
            if (data.height != null) {
                message.height = data.height;
            }
            return message;
        };
        ImgRequest.prototype.toObject = function () {
            var data = {};
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.width != null) {
                data.width = this.width;
            }
            if (this.height != null) {
                data.height = this.height;
            }
            return data;
        };
        ImgRequest.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.type === "string" && this.type.length)
                writer.writeString(1, this.type);
            if (typeof this.data === "string" && this.data.length)
                writer.writeString(2, this.data);
            if (this.width !== undefined)
                writer.writeInt32(3, this.width);
            if (this.height !== undefined)
                writer.writeInt32(4, this.height);
            if (!w)
                return writer.getResultBuffer();
        };
        ImgRequest.deserialize = function (bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ImgRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    case 2:
                        message.data = reader.readString();
                        break;
                    case 3:
                        message.width = reader.readInt32();
                        break;
                    case 4:
                        message.height = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ImgRequest.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ImgRequest.deserializeBinary = function (bytes) {
            return ImgRequest.deserialize(bytes);
        };
        return ImgRequest;
    }(pb_1.Message));
    pb.ImgRequest = ImgRequest;
    var ImgResponse = /** @class */ (function (_super) {
        __extends(ImgResponse, _super);
        function ImgResponse(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    _this.data = data.data;
                }
            }
            return _this;
        }
        Object.defineProperty(ImgResponse.prototype, "data", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        ImgResponse.fromObject = function (data) {
            var message = new ImgResponse({});
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        };
        ImgResponse.prototype.toObject = function () {
            var data = {};
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        };
        ImgResponse.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.data !== undefined)
                writer.writeBytes(1, this.data);
            if (!w)
                return writer.getResultBuffer();
        };
        ImgResponse.deserialize = function (bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ImgResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.data = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ImgResponse.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ImgResponse.deserializeBinary = function (bytes) {
            return ImgResponse.deserialize(bytes);
        };
        return ImgResponse;
    }(pb_1.Message));
    pb.ImgResponse = ImgResponse;
    var UnimplementedCanvasService = /** @class */ (function () {
        function UnimplementedCanvasService() {
        }
        UnimplementedCanvasService.definition = {
            GenImg: {
                path: "/pb.Canvas/GenImg",
                requestStream: false,
                responseStream: false,
                requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                requestDeserialize: function (bytes) { return ImgRequest.deserialize(new Uint8Array(bytes)); },
                responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                responseDeserialize: function (bytes) { return ImgResponse.deserialize(new Uint8Array(bytes)); }
            }
        };
        return UnimplementedCanvasService;
    }());
    pb.UnimplementedCanvasService = UnimplementedCanvasService;
    var CanvasClient = /** @class */ (function (_super) {
        __extends(CanvasClient, _super);
        function CanvasClient(address, credentials, options) {
            var _this = _super.call(this, address, credentials, options) || this;
            _this.GenImg = function (message, metadata, options, callback) {
                return _super.prototype.GenImg.call(_this, message, metadata, options, callback);
            };
            return _this;
        }
        return CanvasClient;
    }(grpc_1.makeGenericClientConstructor(UnimplementedCanvasService.definition, "Canvas", {})));
    pb.CanvasClient = CanvasClient;
})(pb = exports.pb || (exports.pb = {}));
