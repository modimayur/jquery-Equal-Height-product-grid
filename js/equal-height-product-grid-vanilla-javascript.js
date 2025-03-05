// Vanilla JavaScript Functions (from earlier)
(function () {
  "use strict";

  // Equal Height Function
  function equalHeight(elements) {
    var heights = [];
    elements.forEach(function (element) {
      var height;
      var boxSizing = window.getComputedStyle(element).boxSizing || window.getComputedStyle(element).mozBoxSizing;
      var isBorderBox = boxSizing === "border-box";
      if (isBorderBox) {
        height = element.offsetHeight; // Includes padding and border
      } else {
        height = element.clientHeight; // Only content and padding
      }
      heights.push(height);
    });
    var maxHeight = Math.max.apply(null, heights);
    elements.forEach(function (element) {
      element.style.height = maxHeight + "px";
    });
    return elements;
  }

  // Equal Height Grid Function
  function equalHeightGrid(elements, columns) {
    var visibleElements = Array.from(elements).filter(function (element) {
      return window.getComputedStyle(element).display !== "none";
    });
    visibleElements.forEach(function (element) {
      element.style.height = "auto";
    });
    for (var i = 0; i < visibleElements.length; i++) {
      if (i % columns === 0) {
        var group = visibleElements.slice(i, i + columns);
        equalHeight(group);
      }
    }
    return elements;
  }

  // Detect Grid Columns Function
  function detectGridColumns(elements) {
    var visibleElements = Array.from(elements).filter(function (element) {
      return window.getComputedStyle(element).display !== "none";
    });
    var firstOffsetTop = visibleElements[0] ? visibleElements[0].offsetTop : 0;
    var columns = 0;
    visibleElements.forEach(function (element) {
      if (element.offsetTop === firstOffsetTop) {
        columns++;
      }
    });
    return columns;
  }

  // Responsive Equal Height Grid Function
  var eventNamespaceCounter = 0;
  function responsiveEqualHeightGrid(elements) {
    var namespace = ".grids_" + eventNamespaceCounter;
    var eventName = "resize" + namespace + " load" + namespace;

    function updateGrid() {
      var columns = detectGridColumns(elements);
      equalHeightGrid(elements, columns);
    }

    // Attach event listeners
    window.addEventListener("resize", updateGrid);
    window.addEventListener("load", updateGrid);

    // Initialize the grid
    updateGrid();

    // Store the namespace on each element
    elements.forEach(function (element) {
      element.dataset.gridsEventNamespace = namespace;
    });

    eventNamespaceCounter++;

    return elements;
  }

  // Responsive Equal Height Grid Destroy Function
  function responsiveEqualHeightGridDestroy(elements) {
    var namespace = elements[0]?.dataset.gridsEventNamespace; // Get namespace from the first element
    if (namespace) {
      window.removeEventListener("resize" + namespace, updateGrid);
      window.removeEventListener("load" + namespace, updateGrid);
    }
    elements.forEach(function (element) {
      element.style.height = "auto";
    });
    return elements;
  }

  // Attach functions to the global window object
  window.equalHeight = equalHeight;
  window.equalHeightGrid = equalHeightGrid;
  window.detectGridColumns = detectGridColumns;
  window.responsiveEqualHeightGrid = responsiveEqualHeightGrid;
  window.responsiveEqualHeightGridDestroy = responsiveEqualHeightGridDestroy;
})();

