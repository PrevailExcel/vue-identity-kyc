# Prembly Identitypass VueJS SDK
> vue-identity-kyc

[![NPM](https://img.shields.io/npm/v/vue-identity-kyc.svg)](https://www.npmjs.com/package/vue-identity-kyc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The Prembly Identitypass VueJS SDK is a library that allows you to easily integrate verification services into your JS/TS app. The SDK is based on the Prembly Identitypass API, which provides a range of verification services, including data verification, identity verification, document verification, biometric verification, radar verification and other verification services.

#### It has full TypeScript Support.



## Install

```bash
npm install --save vue-identity-kyc
```

## Usage

```vue
<script setup>
import { useIdentityPayKYC } from 'vue-identity-kyc';

const config = {
  first_name: "test",
  last_name: "test",
  email: "prevailejimadu@myidentitypass.com",
  merchant_key: "<your-key-here>",
  user_ref: "a unique ref for your user",
  is_test: true,  //set this to through for a test
  config_id: "<configuration ID retrieve from your widget settings>", //optional
  callback: (response) => console.log(response)
}

const verifyWithIdentity = useIdentityPayKYC(config)
</script>

<template>

    <button @click="verifyWithIdentity">Verify Identity</button>

</template>
```

## RESPONSES
```js
RESPONSES

1. Failed response:
         {
          code: "E01",
          message: "Message goes here",
          status: "failed"
      }
      
 2. Cancelled
      {
          code: "E02",
          message: "Verification Canceled",
          status: "failed"
      } 
 3. Success
        {
          code: "00",
          status: "success",
          message: "Verification Successful",
          data:{
              //Verification data goes here
              // kindly check official documentation for data structure for each channel
              //https://developer.myidentitypass.com
              },
          channel:"Channel goes here", e.g BVN,NIN and many more

      }
 ```      
## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## Thank You

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/EjimaduPrevail)!
Also check out my page on medium to catch articles and tutorials on Laravel [follow me on medium](https://medium.com/@prevailexcellent)!

Thanks!
Chimeremeze Prevail Ejimadu.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.