/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// https://helloworld-yr774ewsqa-uc.a.run.app


// get curriculum
exports.getCurriculum = onRequest((request, response) => {
    logger.info("getting curriculum", { structuredData: true });
    response.send("getting curriculum");
});

// get all curriculum
exports.getAllCurriculum = onRequest((request, response) => {
    logger.info("getting all curriculum", { structuredData: true });
    response.send("getting all curriculum");
});

// post curriculum
exports.postCurriculum = onRequest((request, response) => {
    logger.info("posting curriculum", { structuredData: true });
    response.send("posting curriculum");
});

// put curriculum
exports.putCurriculum = onRequest((request, response) => {
    logger.info("putting curriculum", { structuredData: true });
    response.send("putting curriculum");
});

// delete curriculum
exports.deleteCurriculum = onRequest((request, response) => {
    logger.info("deleting curriculum", { structuredData: true });
    response.send("deleting curriculum");
});

