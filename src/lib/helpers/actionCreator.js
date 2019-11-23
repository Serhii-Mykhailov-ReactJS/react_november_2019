/**
 * Generate an action object.
 *
 * @returns {Object} action - The action generated by the factory.
 * @returns {string} action.type - The action type.
 * @returns {*} action.payload - The action payload.
 */
export function actionCreator(actionType, actionPayload) {
  return {
    payload: actionPayload,
    type: actionType,
  };
}