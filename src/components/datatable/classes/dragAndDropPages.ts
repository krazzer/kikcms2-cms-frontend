import DataTable from "@/components/datatable/DataTable.vue";

class DragAndDropPages {
    readonly HALF_TOP: number    = 0;
    readonly HALF_BOTTOM: number = 1;

    readonly THIRD_TOP: number    = 0;
    readonly THIRD_MIDDLE: number = 1;
    readonly THIRD_BOTTOM: number = 2;

    itemIdMouseDown: number | null;
    itemIdMouseOver: number | null;
    itemMouseOverRect: DOMRect | null;
    draggedOverHalf: number | null;
    draggedOverThird: number | null;
    pixelsRequiredForDrag: number = 3;
    movedEnoughToStart: boolean   = false;
    handleMouseUp: any;
    handleMouseMove: any;
    itemX: number | null;
    itemY: number | null;
    itemStartX: number;
    itemStartY: number;
    itemLeft: number;
    DataTable: typeof DataTable;

    init(DataTable: any) {
        this.handleMouseUp = () => {
            this.setMouseUp();
        };

        this.handleMouseMove = (event: MouseEvent) => {
            this.setMouseMove(event);
        };

        window.addEventListener('mouseup', this.handleMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);

        this.DataTable = DataTable;
    }

    isDragged(id: number): boolean {
        return this.movedEnoughToStart && this.itemIdMouseDown == id;
    }

    isDragging(): boolean {
        return this.movedEnoughToStart && this.itemIdMouseDown !== null;
    }

    isHovering(id: number): boolean {
        return this.itemIdMouseOver == id;
    }

    /**
     * @param id
     * @param event
     */
    mouseEnter(id: number, event: MouseEvent) {
        this.itemIdMouseOver   = id;
        this.itemMouseOverRect = (event.target as HTMLInputElement).getBoundingClientRect();
    }

    mouseLeave() {
        this.itemIdMouseOver = null;
    }

    unload() {
        window.removeEventListener('mouseup', this.handleMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @param id
     * @param event
     */
    setMouseDown(id: number, event: MouseEvent) {
        if(event.button !== 0){
            return;
        }

        this.itemIdMouseDown = id;

        this.itemLeft = parseInt(window.getComputedStyle(event.target as HTMLInputElement).marginLeft);

        this.itemStartX = event.clientX;
        this.itemStartY = event.clientY;
    }

    setMouseUp() {
        if(this.itemIdMouseOver !== this.itemIdMouseDown) {
            this.DataTable.rearrange(this.itemIdMouseDown, this.itemIdMouseOver, this.draggedOverThird);
        }

        this.itemIdMouseDown    = null;
        this.movedEnoughToStart = false;
        this.itemX              = null;
        this.itemY              = null;
    }

    /**
     * @param event
     */
    setMouseMove(event: MouseEvent) {
        if (this.itemIdMouseDown != null) {
            if (this.movedEnoughToStart) {
                this.itemX = event.clientX - this.itemStartX + this.itemLeft;
                this.itemY = event.clientY - this.itemStartY;
            } else {
                if (Math.abs(event.clientX - this.itemStartX) > this.pixelsRequiredForDrag ||
                    Math.abs(event.clientY - this.itemStartY) > this.pixelsRequiredForDrag) {
                    this.movedEnoughToStart = true;
                }
            }
        }
    }

    /**
     * Trigged when hovering the page's element container (td) to determine where the mouse is
     * @param id
     * @param event
     */
    mouseMoveContainer(id: number, event: MouseEvent) {
        if (this.isDragging() && !this.isDragged(id) && this.itemMouseOverRect) {
            let height  = this.itemMouseOverRect.height;
            let clientY = event.clientY - this.itemMouseOverRect.y;

            if(clientY < height / 2){
                this.draggedOverHalf = this.HALF_TOP;
            } else {
                this.draggedOverHalf = this.HALF_BOTTOM;
            }

            if(clientY < height / 3){
                this.draggedOverThird = this.THIRD_TOP;
            } else if(clientY > height * (2/3)){
                this.draggedOverThird = this.THIRD_BOTTOM;
            } else {
                this.draggedOverThird = this.THIRD_MIDDLE;
            }
        }
    }
}

export default new DragAndDropPages();