
export function toCString(str) {
  let buffer = Module._malloc(str.length + 1);
  writeAsciiToMemory(str, buffer);
  return buffer;
}

export function callEngine(request, engineFunc) {
  let toCStringRequest = toCString(JSON.stringify(request));
  engineFunc(toCStringRequest);
  Module._free(toCStringRequest);
  return __E0_ENGINE_EXCHANGE_VAL;
}


let __E0_ENGINE_EXCHANGE_VAL = null;
window.__E0_ENGINE_EXCHANGE = function(objStr) {
  __E0_ENGINE_EXCHANGE_VAL = JSON.parse(objStr);
  // let tpi = __CAD_APP.services.tpi;
  // let sceneObject = new tpi.scene.UnmanagedSceneSolid(data, 'SOLID');
  // tpi.addOnScene(sceneObject);
  // __DEBUG__.AddTessDump(obj);
};
