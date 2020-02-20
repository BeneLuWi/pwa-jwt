# Spring Boot/Reactjs and JWT Authentication
## Spring Boot part
### ``JwtAuthenticationFilter``
* Check username and password
* Create Auth-Token, if correct/403 if not
* Return Token

### ``JwtAuthorizationFilter``
* Check if Token is valid

### ``SecurityConstants ``
* Set Constants for the Token

### ``SecurityConfiguration`` 
* Enable/Add ``JwtAuthenticationFilter`` and ``JwtAuthorizationFilter``

## Reactjs part
* Check if there is a Token in the ``localstorage`` 
* Login w/ password and username to ``api/authenticate``
* Save Token to ``localstorage``
