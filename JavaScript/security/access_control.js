// Модуль разграничения прав (ACL).
// Запрещает новичкам доступ к системным командам через API.

const acl = {
    roles: { ADMIN: 100, USER: 10, GUEST: 1 },
    checkPermission(userRole, requiredLevel) {
        return this.roles[userRole] >= requiredLevel;
    }
};
module.exports = acl;
