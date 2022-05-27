let userResponseWrapper = (userName) => {
    let wrapper = {
        api_user: {
            user_name: `${userName}`
        }
    }

    return wrapper;
}

let genericResponseWrapper = (message) => {
    let wrapper = {
        generic_response: {
            message: `${message}`,
        }
    }

    return wrapper;
}

export default {
    userResponseWrapper,
    genericResponseWrapper
}