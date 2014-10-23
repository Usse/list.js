describe("List", function() {
  var list = new List();
  it("Create an empty list", function() {
    expect(list).toBeDefined();
  });
  it("Append an element to the list", function() {
    list.append("test1");
    list.append("test2");
    expect(list.listSize).toBe(2);
    expect(list.listSize).toBeGreaterThan(1);
  });
  it("Print one element", function() {
    expect(list.toString()).toContain("test1");
  });
  it("Set the correct length", function() {
    expect(list.length()).toBe(2);
  });
  it("Find an element", function() {
    expect(list.find("test1")).toBe(0);
  });
  it("Remove one element", function() {
    list.remove("test1");
    expect(list.listSize).toBe(1);
    expect(list.length()).toBe(1);
    expect(list.toString()).not.toContain("test1");
  });
  it("Don't find a removed element", function() {
    expect(list.find("test1")).toBe(-1);
  });
  it("Insert an element in the second position", function() {
    list.insert("testA", "test2");
    expect(list.toString()[1]).toBe("testA");
  });
  it("Clear the list", function() {
    list.clear();
    expect(list).toBeDefined();
    expect(list.listSize).toBe(0);
    expect(list.length()).toBe(0);
    expect(list.find("test2")).toBe(-1);
  });
  it("Create three elements after cleaning the list", function() {
    list.append("test1");
    list.append("test2");
    list.append("test3");
    expect(list.listSize).toBe(3);
    expect(list.find("test1")).toBe(0);
    expect(list.find("test2")).toBe(1);
    expect(list.find("test3")).toBe(2);
  });
  it("Search the list to find the element", function() {
    expect(list.contains("test1")).toBeTruthy();
    expect(list.contains("test2")).toBeTruthy();
    expect(list.contains("test4")).toBeFalsy();
    expect(list.contains("TEST1")).toBeFalsy();
    expect(list.contains(null)).toBeFalsy();
  });
});

describe("List Edges", function() {
  var list = new List();
  it("create and empty list", function() {
    expect(list).toBeDefined();
  });
  it("Append a null element", function() {
    list.append(null);
    expect(list.listSize).toBe(1);
    expect(list.contains(null)).toBe(true);
  });
  it("Print a null element", function() {
    expect(list.toString()[0]).toBe(null);
  });
  it("Delete a null element", function() {
    list.remove(null);
    expect(list.listSize).toBe(0);
    expect(list.contains(null)).toBe(false);
  });
});

describe("List Traversing", function() {
  var list = new List();
  list.append("item1"); list.append("item2"); list.append("item3");
  list.append("item4"); list.append("item5"); list.append("item6");
  list.append("item7"); list.append("item8"); list.append("item9");
  it("Travering list setup correctly", function() {
    expect(list.length()).toBe(9);
    expect(list.length()).toBe(list.listSize);
  });
  it("Current position be at the start of the List", function() {
    expect(list.currPos()).toBe(0);
  });
  it("Move to element 4", function() {
    list.moveTo(4);
    expect(list.currPos()).toBe(4);
  });
  it("Move to front element", function() {
    list.front();
    expect(list.currPos()).toBe(0);
  });
  it("Move to end element", function() {
    list.end();
    expect(list.currPos()).toBe(list.listSize -1);
  });
  it("Move to prev element", function() {
    list.moveTo(4);
    list.prev();
    expect(list.currPos()).toBe(3);
  });
  it("Move to next element", function() {
    list.moveTo(4);
    list.next();
    expect(list.currPos()).toBe(5);
  });
  it("Get the current element", function() {
    list.moveTo(2);
    expect(list.getElement()).toBe("item3");
  });
});

describe("List Traversing Edges", function() {
  var list = new List();
  list.append("item1"); list.append("item2"); list.append("item3");
  list.append("item4"); list.append("item5"); list.append("item6");
  list.append("item7"); list.append("item8"); list.append("item9");
  it("Travering list setup correctly", function() {
    expect(list.length()).toBe(9);
    expect(list.length()).toBe(list.listSize);
  });
  it("Move to the last element and the next", function() {
    list.end();
    list.next();
    expect(list.currPos()).toBe(list.listSize -1);
  });
  it("Move to the first element and the prev", function() {
    list.front();
    list.prev();
    expect(list.currPos()).toBe(0);
  });
  it("Move to the start of the array", function() {
    list.moveTo(0);
    expect(list.getElement()).toBe("item1");
  });
  it("Move to the end of the array", function() {
    list.moveTo(8);
    expect(list.getElement()).toBe("item9");
  });
  it("Move to an index outside the array", function() {
    list.front();
    list.moveTo(123);
    expect(list.currPos()).toBe(0);
  });
  it("Move to a negative index", function() {
    list.front();
    list.moveTo(-123);
    expect(list.currPos()).toBe(0);
  });
  it("Move to a null index", function() {
    list.front();
    list.moveTo(null);
    expect(list.currPos()).toBe(0);
  });
});
