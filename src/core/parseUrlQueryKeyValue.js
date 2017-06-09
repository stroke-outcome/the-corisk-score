function tryDecodeURIComponent(value) {
  try {
    return decodeURIComponent(value);
  } catch (e) {
    // Ignore any invalid uri component
  }
}

function isDefined(value) { return typeof value !== 'undefined'; }

export default function parseUrlQueryKeyValue(keyValue) {
  keyValue = keyValue.replace(/^\?/, '');
  var obj = {},
    key_value, key;
  var iter = (keyValue || "").split('&');
  
  for (var i = 0; i < iter.length; i++) {
    var kValue = iter[i];
    if (kValue) {
      key_value = kValue.replace(/\+/g, '%20').split('=');
      key = tryDecodeURIComponent(key_value[0]);
      if (isDefined(key)) {
        var val = isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
        if (!hasOwnProperty.call(obj, key)) {
          obj[key] = val;
        } else if (Array.isArray(obj[key])) {
          obj[key].push(val);
        } else {
          obj[key] = [obj[key], val];
        }
      }
    }
  };
  return obj;
};

