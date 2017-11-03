1. It should return Tim since the firstName variable is defined in the scope of the function as Tim
2. The displayFirstName() should return 'Tim' however the console.log will return nothing as the variable isn't accessible outside of the function scope
3. It should return undefined as the variable is hoisted to the top but not defined yet
4. Variables without the keyword are not hoisted so it will return a reference error
5. it should return Hi undefined since the firstName is hoisted to the top of the function but not defined
6. Not using the var keyword so it's a reference error
7. It should return 'HI' as the function is hoisted to the top and fully defined
8. This should return an error as this is a function expression and the variable is hoisted to the top but still not defined