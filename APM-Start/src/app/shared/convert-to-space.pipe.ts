import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacePipe implements PipeTransform{
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }
    /**
     * This implementation doesnt appear in the PipeTransform in v8
     * but for some reason is accepted. The default implementation
     * is commented out above.
     * @param value 
     * @param character 
     */
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}