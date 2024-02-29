

// These users should be stored in a safer place like environment variables
// const env = process.env.ENV!;
// const password = process.env.PASSWORD!;
// const userId = process.env.USERID!;
// const userName = process.env.USERNAME!;
export const USER  = {
    standard: {user: "standard_user", password: "secret_sauce"},
    locked: {user: "locked_out_user", password: "secret_sauce"},
    problem: {user: "problem_user", password: "secret_sauce"},
    glitch: {user: "performance_glitch_user", password: "secret_sauce"},
    error: {user: "error_user", password: "secret_sauce"},
    visual:{user: "visual_user", password: "secret_sauce"}
}