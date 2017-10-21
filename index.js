module.exports = (Franz) => {
    class Zulip extends Franz {
        validateServer(URL) {
            const api = `${URL}/api/v1/server_settings`;
            return new Promise((resolve, reject) => {
                $.get(api, (resp) => {
                    if (typeof(resp) === 'object' && 'realm_uri' in resp) {
                        resolve();
                    } else {
                        reject();
                    }
                }).fail(reject);
            });
        }
    }
    return Zulip;
};