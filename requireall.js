/**
 * Creates Webpack context and returns an array
 * of functions that can require modules.
 * @param {any} requireContext Webpack require context
 * @return {array} function loaders.
 */
export default function requireall(requireContext) {
  return requireContext.keys().map(requireContext);
}
