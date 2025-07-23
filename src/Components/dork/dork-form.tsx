"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { dorkTypes, Dork } from "@/lib/data/dork-data";
import { toast } from "sonner";
import Link from "next/link";
import { Plus, Save, X } from "lucide-react";
import { useEffect } from "react";
import { routePaths } from "@/constants/routes";

interface DorkFormProps {
    onAddDork: (dorkType: string, dorkText: string) => void;
    onUpdateDork?: (id: string, dorkType: string, dorkText: string) => void;
    onCancelEdit?: () => void;
    editingDork?: Dork | null;
}

interface FormData {
    dorkType: string;
    dorkText: string;
}

export function DorkForm({ onAddDork, onUpdateDork, onCancelEdit, editingDork }: DorkFormProps) {
    const t = useTranslations('dorkForm');
    const isEditing = !!editingDork;

    const form = useForm<FormData>({
        defaultValues: {
            dorkType: dorkTypes[0].value,
            dorkText: "",
        },
    });

    // Parse dork for editing
    useEffect(() => {
        if (editingDork) {
            const dorkParts = editingDork.dork.split(':');
            const dorkType = dorkParts[0];
            const dorkText = dorkParts.slice(1).join(':').replace(/^"(.*)"$/, '$1'); // Remove quotes if present

            form.reset({
                dorkType,
                dorkText,
            });
        } else {
            form.reset({
                dorkType: dorkTypes[0].value,
                dorkText: "",
            });
        }
    }, [editingDork, form]);

    const onSubmit = (data: FormData) => {
        if (!data.dorkText.trim()) {
            toast.error(t('validation.textRequired'));
            return;
        }

        if (isEditing && onUpdateDork && editingDork) {
            onUpdateDork(editingDork.id, data.dorkType, data.dorkText);
            toast.success('Dork updated successfully!');
        } else {
            onAddDork(data.dorkType, data.dorkText);
            form.reset({
                dorkType: data.dorkType,
                dorkText: "",
            });
            toast.success(t('success'));
        }
    };

    return (
        <Card className="w-full border-0 shadow-md bg-gradient-to-br from-card via-card to-card/95">
            <CardHeader className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-t-lg">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                    <div className="p-2 bg-primary/10 rounded-xl">
                        <i className={`fas ${isEditing ? 'fa-edit' : 'fa-magic'} text-primary text-xl`}></i>
                    </div>
                    {isEditing ? 'Edit Dork Query' : t('title')}
                </CardTitle>
                <CardDescription className="text-base">
                    {isEditing ? 'Modify your existing dork query' : t('description')}
                </CardDescription>
                {isEditing && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onCancelEdit}
                        className="mt-2 mx-auto hover:bg-destructive/10 hover:text-destructive"
                    >
                        <X className="w-4 h-4 mr-2" />
                        Cancel Edit
                    </Button>
                )}
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="dorkType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-semibold flex items-center gap-2">
                                        <i className="fas fa-filter text-primary"></i>
                                        {t('dorkType')}
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full h-12 bg-card dark:bg-card/50 border-2 border-border hover:border-primary/30 transition-colors backdrop-blur-sm shadow-sm">
                                                <SelectValue placeholder="Select a dork type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-card dark:bg-card border border-border shadow-lg backdrop-blur-sm">
                                            {dorkTypes.map((type) => (
                                                <SelectItem
                                                    key={type.value}
                                                    value={type.value}
                                                    className="cursor-pointer hover:bg-muted/50 focus:bg-muted/50 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-mono text-primary font-semibold">{type.value}:</span>
                                                        <span>{type.title}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dorkText"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-semibold flex items-center gap-2">
                                        <i className="fas fa-keyboard text-primary"></i>
                                        {t('searchQuery')}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t('placeholder')}
                                            className="h-12 bg-card dark:bg-card/50 border-2 border-border hover:border-primary/30 focus:border-primary transition-colors backdrop-blur-sm shadow-sm"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className={`w-full h-12 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${isEditing
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                                    : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90'
                                }`}
                            size="lg"
                        >
                            {isEditing ? (
                                <>
                                    <Save className="w-5 h-5 mr-2" />
                                    Update Dork
                                </>
                            ) : (
                                <>
                                    <Plus className="w-5 h-5 mr-2" />
                                    {t('addButton')}
                                </>
                            )}
                        </Button>
                    </form>
                </Form>

                <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="text-center p-4 bg-muted/30 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-2">
                            <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                            {t('helpText')}
                        </p>
                        <Link
                            href={routePaths.about}
                            className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
                        >
                            {t('helpLink')}
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
