import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Button } from "tns-core-modules/ui/button";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

export function toggle(args: EventData) {
    const page = <Page>((<any>args.object).page);
    
    const getElementById = id => { return page.getViewById(id); }
    
    const toggleBtn = <Button>getElementById("toggleUserInteraction");
    const isEnabled = toggleBtn.text === "disable" ? true : false;
    toggleBtn.text = !isEnabled ? "disable" : "enable";

    (<Button>getElementById("testBtn")).isUserInteractionEnabled = !isEnabled;
    (<Button>getElementById("testLabel")).isUserInteractionEnabled = !isEnabled;
    (<StackLayout>getElementById("testStackLayout")).isUserInteractionEnabled = !isEnabled;
}

export function test() {
    console.log("onTap");
    alert("onTap");
}
