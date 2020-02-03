// export class LikeComponent {
//     constructor(private likeCount: number, private isLiked: boolean) {
//         console.log('currently ' + this.isLiked + ' at a total of ' + this.likeCount);
//     }
// }

export class LikeComponent {

    constructor(public likesCount: number, public isSelected: boolean) {

    }
    onClick() {
        if(this.isSelected) {
            this.likesCount--;
            this.isSelected = false;
        }
        else {
            this.likesCount++;
            this.isSelected = true;
        }
    }
}