import common from "../src/common/common.js";

describe("User Wrapper", () => {
    test("it should create wrapper user response", () => {
        let expectedWrapper = {
            api_user: {
                user_name: "Monica"
            }
        }

        expect(common.userResponseWrapper("Monica")).toEqual(expectedWrapper);
    })
})

describe("Generic Wrapper", () => {
    test("it should create wrapper generic response", () => {
        let expectedWrapper = {
            generic_response: {
                message: "Hello Testing with Jest",
            }
        }

        expect(common.genericResponseWrapper("Hello Testing with Jest")).toEqual(expectedWrapper);
    })
})