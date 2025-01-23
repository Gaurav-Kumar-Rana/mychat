# mychat
#React Life cycle
1. Mount
    1. constructor() - Called when a component is initialized 
    2. getDeriveStateFromProps(props, state) -  Allow state to be updated based on props
    3. render() - Return JSX
    4. componentDidMount()
2. Update
    1. getDeriveStateFromProps(props, state)
    2. shouldComponentUpdate(nextProps, nextState)
    3. render()
    4. getSnapshotBeforeUpdate(prevProps, prevState)
    5. componentDidUpdate(prevProps, prevState, snapshot)
3. Unmount
    1. componentWillUnmount()
4. Error Handling
    1. static getDerivedStateFromError(error)
    2. componentDidCatch(error, info)

#Optimization of react App
1. React.memo
2. React.lazy(import("./appComponent")) and suspens
3. useMemo()
4. useCallback()
5. debouncing and throttling 
6. Adding Error boundry
7. Avoid props drilling
8. Server side rendering

#Inheritance
1. Object.create(parent)
2. Object.assign({}, parent)
3. Constructor function using call and apply using Parent.call(this, name)
4. using ES6 Class using constructor()
5. Object.setProtoTypeOf(child, parent)

#Promise
const promise = new Promise((resolve, reject)=>{
    resolve("sucess");
});

promise.then((result)=>{
    console.log(result);
})

