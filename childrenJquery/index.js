$(() => {
  let BLOCKS = [{counter: 0}, {counter: 0}, {counter: 0}];
  let incrementalIndex = 0;

  // select element from real DOM
  const $templateBody = $("#template-children");
  const $childrenContainer = $(".children-container");

  // copy html content into handlerbar compiler and create template
  var template = Handlebars.compile($templateBody.html());


  // button container handler
  $(".button-container button").click(() => {
    incrementalIndex++;
    renderTemplate();
    blinkChildren(`.children, .second-children`)
  });

  // arrow function cannot be used in jquery, context is required
  $(".children-container").on("click", "button",function() {
    const id = $(this).closest(".children").data("id");
    BLOCKS = BLOCKS.map((block, index) => {
      if(index !== (id - incrementalIndex))
        return block;


      return {
        ...block,
        counter: block.counter+1,
      }
    });
    renderTemplate();
    blinkChildren(`[data-id='${id}']`)
    blinkChildren(`[data-id='${id}'] .second-children:last-child`)
  });

  // render element
  const renderTemplate = () => {
    $childrenContainer.html("")

    BLOCKS.map(({counter: incremental}, index) => {
      const position = index + incrementalIndex;
      $childrenContainer.append(template({incremental, position}));
    });
  }

  // blink element
  const blinkChildren = (element) => {
    $(element).addClass("reactive");
    setTimeout(() => $(element).removeClass("reactive"), 1200);
  }

  // initial render template
  renderTemplate();
});
