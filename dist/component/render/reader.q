(() => {
    let $sample = Q.$("div",{class:`btn btn-info`, onClick:()=>{alert("nice")}},("<h1 class='text-2xl font-bold'>hi</h1>"));
    let $othersample = Q.$(("hello"), "div");

    return { $sample, $othersample };
})();
