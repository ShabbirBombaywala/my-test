let router = require('express').Router();
const projectController = require('../controllers/project');
const userController = require('../controllers/user');

router.route('/user').get(userController.get);

router.route('/projects').get(projectController.get);
// .put(budgetController.update);

// router
//   .route('/transaction')
//   .put(budgetController.updateTransaction)
//   .post(budgetController.addTransaction)
//   .delete(budgetController.deleteTransaction);

// Export API routes
module.exports = router;
