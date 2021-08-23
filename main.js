$(()=>{
    const mainHTimelineWrapper = $(".h-timeline-wrapper")[0];
    const moveContentLineWrapper = (el, moveTo) =>{
        
        const contentLineWrapper = $(el).find(".content-line-wrapper")[0];
        const contentWrapper = $(contentLineWrapper).find(".content-wrapper")[0];
        const lineWrapper = $(contentLineWrapper).find(".content-line")[0];
        
        
        const mainWrapperPos = el.getBoundingClientRect();
        const lineWrapperPos = lineWrapper.getBoundingClientRect();
        const contentLineWrapperPos = contentLineWrapper.getBoundingClientRect();
        const contentWrapperPos = contentWrapper.getBoundingClientRect();
        const moveToPos = moveTo.getBoundingClientRect();
        let contenWrapperLeft = moveToPos.x - mainWrapperPos.x + moveToPos.width/2 - contentWrapperPos.width/2;
        if( contenWrapperLeft < 0 ) contenWrapperLeft = 0;
        if( contenWrapperLeft > mainWrapperPos.width - contentWrapperPos.width ) contenWrapperLeft = mainWrapperPos.width - contentWrapperPos.width;
        console.log(contenWrapperLeft, mainWrapperPos.width, contentWrapperPos.width);
        
        
        $(contentLineWrapper).css("visibility","visible");
        $(lineWrapper).css("left", String(moveToPos.x - mainWrapperPos.x + moveToPos.width/2) + "px");
        $(contentWrapper).css("left", String(contenWrapperLeft) + "px");
        console.log(moveTo);
        $(moveTo).parent().parent().find(".content-wrapper").html($(moveTo).data("content"));
    }
    $(".timeline-item").click((event)=>{
        console.log(event.target);
        const el = event.target;
        moveContentLineWrapper(mainHTimelineWrapper, el);
        $(el).parent().find(".timeline-item").removeClass("active");
        $(el).addClass("active");
    })
    moveContentLineWrapper(mainHTimelineWrapper, $(".timeline-item")[$(".timeline-item").length - 1]);
})