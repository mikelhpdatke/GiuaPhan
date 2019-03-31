/**
 *
 * Asynchronously loads the component for GoogleTranslate
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
