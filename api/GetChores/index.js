module.exports = async function (context, req) {
context.log('Fetching chores...');
const chores = [
{ id: 1, name: 'Do Dishes', status: 'Incomplete' },
{ id: 2, name: 'Feed animals', status: 'Complete' }
];
context.res = {
status: 200,
body: chores
};
};
