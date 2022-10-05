# Case
Design for the person your user wants to be

# axios vs. fetch developer experience example, put poll out there to market ideas
Q: What's the urbit equivalent? Axios currently has: 33,192,445 Weekly Downloads, yet fetch is shipped with every browser.

# random ideas
- Use of mixins, cause protyping is composable and readable with slim code for embedded devices & screens
- Swapable databases (e.g. I use google maps for businesses because they have education certificates, but I use apple typically for nav becuase they have trees on their map)
- Sidequest: Can you overlap with domains like fluence to 'mixin' feeds. E.g. Emoji sets are attributable, using a type of gall middleware, similiar to a type of 'paywall' of bitrate from emotions. can you optimize keystrokes in discourse, searchable, like rumours urbit app.

```js
const axios = require('axios');

let url = 'localhost:5880/user?ID=12345'
// Make a request for a user with a given ID
let axiosPromise = axios.get(url)
let axiosPromise = axios(url) // this this works, can't test because apple rn fr

// vs. native browser code
let promise = fetch(url)
```