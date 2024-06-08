**Copyright @ Anshuman Kundu**

# Redux
*by Anshuman Kundu*


### Introduction

##### Definition:
1. It is a state container.
2. It is for javascript apps.
3. It is predictable.

###### Redux stores the state of the application which means it stores the state of all the individual components of that application.

###### Redux and React are seperate independent libraries and to connect both **React-Redux** package comes into picture which provides some functions from Redux to be used in React.

### Three core concepts in Redux

###### *Scenario of a cake shop*

| Entities | Activities |
|-----------------|-----------------|
| Shop - stores cakes on a shelf | Customer - Buy a cake | 
| Shopkeeper - At the front of the store | Shopkeeper - Finds the cake and removes it from the shelf | 
| Customer - At the store entrance | Shopkeeper - Keeps the receipt for sale tracking |


| Cake Shop Scenario | Redux | Purpose |
|--------------------|-------|---------|
| Cake Shop | Store | Holds the state of your application |
| Intention to BUY_CAKE | Action | Describes what happened as in describes the changes in the state of the application |
| Shopkeeper | Reducer | Ties the store and actions together |

### Three Principles of Redux

###### 1. The state of your whole application is stored in an object tree inside the store.
    {
        number_of_cakes: 10
    }
###### 2. The only way to make a change in the state is by action which is an object describing what happened.
    {
        type: BUY_CAKE
    }
###### 3. To describe how the actions will change the state in the store is by writing pure reducers.
    Reducer - (prevState, action) => newState

    const reducer = (state, action) => {
        if(action.type === BUY_CAKE){
            return number_of_cakes: state.number_of_cakes - 1;
        }
    }