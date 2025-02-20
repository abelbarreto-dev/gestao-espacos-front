const UserStore = (function () {
    let instance;

    function createInstance() {
        let user = null;

        return {
            setUser: function (userData) {
                user = userData;
                localStorage.setItem("user", JSON.stringify(userData)); // Armazena no localStorage para persistência
            },
            getUser: function () {
                if (!user) {
                    user = JSON.parse(localStorage.getItem("user")); // Recupera do localStorage se não estiver na memória
                }
                return user;
            },
            clearUser: function () {
                user = null;
                localStorage.removeItem("user");
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Exportando o Singleton
export default UserStore;
