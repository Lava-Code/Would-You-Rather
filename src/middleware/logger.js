
/* TODO 
    * Create a logger middleware that will help us view the actions and state of the store
*/
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The Action Type is:', action)
    const returnedValue = next(action)
    console.log('The New value of store is:', store.getState())
    console.groupEnd()
    return returnedValue
}
export default logger
