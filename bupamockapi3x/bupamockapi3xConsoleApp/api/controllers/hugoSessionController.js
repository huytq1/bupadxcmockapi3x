"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSession(req, res, next) {
    var membershipId = req.swagger.params.membershipId.value;
    var body = req.swagger.params.body.raw;
    var mockSession = membershipId + 98764;
    var response = mockSession;
    switch (membershipId) {
        case 21309604:
            return res.status(400).send();
        case 21237193:
            return res.status(500).send();
        case 12345:
            return res.status(401).send();
        case 550550:
            return null;
    }
    return res.json(response);
}
exports.createSession = createSession;
function createMembershipNote(req, res, next) {
    var membershipId = req.swagger.params.membershipId.value;
    var body = req.swagger.params.body.raw;
    var mockSession = body.sessionId + membershipId;
    var response = mockSession;
    switch (membershipId) {
        case 21309604:
            return res.status(400).send();
        case 21237193:
            return res.status(500).send();
        case 12345:
            return res.status(401).send();
        case 3456:
            return res.status(401).send();
        case 111213:
            return res.status(400).send();
        case 141516:
            return res.status(500).send();
        case 94381761:
            return res.status(400).send();
        case 83168617:
            return res.status(500).send();
        case 660660:
            return null;
    }
    return res.json(response);
}
exports.createMembershipNote = createMembershipNote;
function closeSession(req, res, next) {
    res.json();
}
exports.closeSession = closeSession;
//# sourceMappingURL=hugoSessionController.js.map