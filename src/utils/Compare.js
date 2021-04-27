async function compareGreater(p1, p2) {
    CANVAS_RENDER.update("compare", [p1, p2]);
    await sleep(SLEEP_TIME);
    CANVAS_RENDER.update("finishCompare", [p1, p2]);
    if (ARRAY[p1] > ARRAY[p2]) return true;
    else return false;
}

async function compareSmaller(p1, p2) {
    CANVAS_RENDER.update("compare", [p1, p2]);
    await sleep(SLEEP_TIME);
    CANVAS_RENDER.update("finishCompare", [p1, p2]);
    if (ARRAY[p1] < ARRAY[p2]) return true;
    else return false;
}