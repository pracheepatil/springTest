module.exports = {
    company: {
        get: [{'/company/:id' : "getCompany"},
              {'/company' : "getAllCompany"}
    ],
        post: [{'/company' : 'createCompany'}],
        delete: [{"/company/:id" : 'deleteCompany'}]
    },

    user: {
        get: [{'/user/:id' : "getUser"},
              {'/user' : "getAllUser"}
    ],
        post: [{'/user' : 'createUser'}],
    }
}