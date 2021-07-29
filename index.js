const core = require('@actions/core');

try {
    const job = core.getInput('job');
    console.log('job');
    console.log(job);
    console.log('typeof job');
    console.log(typeof job);
    console.log('job result');
    console.log(job());
} catch(error) {
    core.setFailed(error.message);
}