/**
 * @example
 * <p v-align="center">
 *  I am a center aligned text.
 * </p>
 */
export default (element, binding) => element.classList.add(`${binding.value}-align`);