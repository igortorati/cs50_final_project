async function swap(p1, p2) {
    if (RUNNING) {
        var temp = ARRAY[p1];
        ARRAY[p1] = ARRAY[p2];
        ARRAY[p2] = temp;
    }
    CANVAS_RENDER.update("swap", [p1, p2]);
    await sleep(SLEEP_TIME * SWAP_SLEEP_MODFIER);
    CANVAS_RENDER.update("finishSwap", [p1, p2]);
}