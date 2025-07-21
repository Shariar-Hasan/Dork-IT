import { Dork } from "@/lib/data/dork-data";

const STORAGE_KEY = "dork-it-queries";

export class DorkStorage {
    private static instance: DorkStorage;

    private constructor() { }

    public static getInstance(): DorkStorage {
        if (!DorkStorage.instance) {
            DorkStorage.instance = new DorkStorage();
        }
        return DorkStorage.instance;
    }

    /**
     * Check if localStorage is available
     */
    private isStorageAvailable(): boolean {
        try {
            return typeof window !== "undefined" && window.localStorage !== null;
        } catch {
            return false;
        }
    }

    /**
     * Get all dorks from localStorage
     */
    public getDorks(): Dork[] {
        if (!this.isStorageAvailable()) {
            return [];
        }

        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) {
                return [];
            }
            return JSON.parse(stored) as Dork[];
        } catch (error) {
            console.error("Error reading dorks from localStorage:", error);
            return [];
        }
    }

    /**
     * Save dorks to localStorage
     */
    public saveDorks(dorks: Dork[]): void {
        if (!this.isStorageAvailable()) {
            return;
        }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dorks));
        } catch (error) {
            console.error("Error saving dorks to localStorage:", error);
        }
    }

    /**
     * Add a new dork
     */
    public addDork(dork: Dork): void {
        const dorks = this.getDorks();
        dorks.push(dork);
        this.saveDorks(dorks);
    }

    /**
     * Remove a dork by ID
     */
    public removeDork(id: string): void {
        const dorks = this.getDorks();
        const filtered = dorks.filter(dork => dork.id !== id);
        this.saveDorks(filtered);
    }

    /**
     * Clear all dorks
     */
    public clearDorks(): void {
        if (!this.isStorageAvailable()) {
            return;
        }

        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error("Error clearing dorks from localStorage:", error);
        }
    }

    /**
     * Check if there are any stored dorks
     */
    public hasDorks(): boolean {
        return this.getDorks().length > 0;
    }
}
