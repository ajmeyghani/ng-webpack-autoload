/*
 * Helper to get the list of the files.
 * specific to Webpack.
*/
export default function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
