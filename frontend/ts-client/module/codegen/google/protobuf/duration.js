import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * A Duration represents a signed, fixed-length span of time represented
 * as a count of seconds and fractions of seconds at nanosecond
 * resolution. It is independent of any calendar and concepts like "day"
 * or "month". It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted
 * from a Timestamp. Range is approximately +-10,000 years.
 * 
 * # Examples
 * 
 * Example 1: Compute Duration from two Timestamps in pseudo code.
 * 
 *     Timestamp start = ...;
 *     Timestamp end = ...;
 *     Duration duration = ...;
 * 
 *     duration.seconds = end.seconds - start.seconds;
 *     duration.nanos = end.nanos - start.nanos;
 * 
 *     if (duration.seconds < 0 && duration.nanos > 0) {
 *       duration.seconds += 1;
 *       duration.nanos -= 1000000000;
 *     } else if (durations.seconds > 0 && duration.nanos < 0) {
 *       duration.seconds -= 1;
 *       duration.nanos += 1000000000;
 *     }
 * 
 * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 * 
 *     Timestamp start = ...;
 *     Duration duration = ...;
 *     Timestamp end = ...;
 * 
 *     end.seconds = start.seconds + duration.seconds;
 *     end.nanos = start.nanos + duration.nanos;
 * 
 *     if (end.nanos < 0) {
 *       end.seconds -= 1;
 *       end.nanos += 1000000000;
 *     } else if (end.nanos >= 1000000000) {
 *       end.seconds += 1;
 *       end.nanos -= 1000000000;
 *     }
 * 
 * Example 3: Compute Duration from datetime.timedelta in Python.
 * 
 *     td = datetime.timedelta(days=3, minutes=10)
 *     duration = Duration()
 *     duration.FromTimedelta(td)
 * 
 * # JSON Mapping
 * 
 * In JSON format, the Duration type is encoded as a string rather than an
 * object, where the string ends in the suffix "s" (indicating seconds) and
 * is preceded by the number of seconds, with nanoseconds expressed as
 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 * be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 * microsecond should be expressed in JSON format as "3.000001s".
 */

function createBaseDuration() {
  return {
    seconds: Long.ZERO,
    nanos: 0
  };
}
export const Duration = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;
        case 2:
          message.nanos = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$nanos;
    const message = createBaseDuration();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = (_object$nanos = object.nanos) !== null && _object$nanos !== void 0 ? _object$nanos : 0;
    return message;
  }
};