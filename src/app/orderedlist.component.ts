import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ordered-list",
  templateUrl: "./orderedlist.component.html",
  styleUrls: ["./orderedlist.component.css"]
})
export class OrderedListComponent implements OnInit {
  direction = false;
  list: string[];
  sortedList: string[];
  ngOnInit(): void {
    this.list = [];
  }
  sortList(list: string[], direction: boolean): string[] {
    list = list.sort((a, b) => {
      if (direction) {
        // Sort down
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }
        return 0;
      }
      // Sort up
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    return list;
  }
  listInputHandler(t: HTMLTextAreaElement) {
    this.list.push(t.value);
    t.value = "";
    this.sortedList = this.sortList(this.list, this.direction);
  }
  listSortDirectionHandler(): void {
    this.direction = !this.direction;
    this.sortedList = this.sortList(this.list, this.direction);
  }
  listClearHandler(): void {
    this.sortedList = this.list = [];
  }
}
