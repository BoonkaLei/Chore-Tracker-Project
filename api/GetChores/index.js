module.exports = async function (context, req) {
context.log('Fetching chores...');
const chores = [
{ id: 1, name: 'Make bed', status: 'Incomplete' },
{ id: 2, name: 'Feed cat', status: 'Complete' }
];
context.res = {
status: 200,
body: chores
};
};
