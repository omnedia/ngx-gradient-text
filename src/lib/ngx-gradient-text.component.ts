import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "om-gradient-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-gradient-text.component.html",
  styleUrl: "./ngx-gradient-text.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxGradientTextComponent implements OnInit {
  @Input("styleClass")
  styleClass?: string;

  @Input("gradientStart")
  set shimmerColor(color: string) {
    this.style["--gradient-from"] = color;
  }

  @Input("gradientEnd")
  set textColor(color: string) {
    this.style["--gradient-to"] = color;
  }

  @Input("text")
  text!: string;

  style: any = {};

  ngOnInit(): void {
    if (!this.text) {
      throw new Error("om-gradient-text: no text was given to the component!");
    }
  }
}
