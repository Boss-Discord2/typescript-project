"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var heck = [1, 2, 3, 4];
heck = true;
heck = 1;
heck = ["heck"];
function peckedJerry(target, count) {
    return "You pecked jerry " + count + " times!";
}
function sendLog(text, extra) {
    if (extra) {
        return console.log(text + ' Extra!');
    }
    return console.log(text);
}
sendLog("heck you", true);
var HeckinHeck = {
    key1: "value1",
    key2: 90,
    key3: true,
    key4: ["hi"],
    key5: [1, 2]
};
function feedJerry(count, goodBoy) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!goodBoy) {
                return [2 /*return*/, "You fed jerry " + count + " allys!"];
            }
            return [2 /*return*/, "Jerry is a good boy"];
        });
    });
}
function StringOrBool(a, b) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (b) {
                return [2 /*return*/, true];
            }
            if (!b) {
                return [2 /*return*/, console.log("Jerry!")];
            }
            return [2 /*return*/];
        });
    });
}
StringOrBool("jerry", true);
var jerry = /** @class */ (function () {
    function jerry(count) {
        this.count = count;
        this.jerry = "good boy";
    }
    jerry.prototype.feed = function () {
        return console.log("You fed jerry " + this.count + " times!");
    };
    return jerry;
}());
exports["default"] = jerry;
