"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { dorkTypes } from "@/lib/data/dork-data";
import { toast } from "sonner";
import Link from "next/link";
import { Plus } from "lucide-react";

interface DorkFormProps {
    onAddDork: (dorkType: string, dorkText: string) => void;
}

interface FormData {
    dorkType: string;
    dorkText: string;
}

export function DorkForm({ onAddDork }: DorkFormProps) {
    const t = useTranslations('dorkForm');
    const form = useForm<FormData>({
        defaultValues: {
            dorkType: dorkTypes[0].value,
            dorkText: "",
        },
    });

    const onSubmit = (data: FormData) => {
        if (!data.dorkText.trim()) {
            toast.error(t('validation.textRequired'));
            return;
        }

        onAddDork(data.dorkType, data.dorkText);
        form.reset({
            dorkType: data.dorkType,
            dorkText: "",
        });
        toast.success(t('success'));
    };

    return (
        <Card className="w-full border-0 shadow-md bg-gradient-to-br from-card via-card to-card/95">
            <CardHeader className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-t-lg">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                    <div className="p-2 bg-primary/10 rounded-xl">
                        <i className="fas fa-magic text-primary text-xl"></i>
                    </div>
                    {t('title')}
                </CardTitle>
                <CardDescription className="text-base">
                    {t('description')}
                </CardDescription>
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
                                            <SelectTrigger className="h-12 bg-muted/50 border-2 hover:border-primary/30 transition-colors">
                                                <SelectValue placeholder="Select a dork type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-popover">
                                            {dorkTypes.map((type) => (
                                                <SelectItem key={type.value} value={type.value} className="cursor-pointer">
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
                                            className="h-12 bg-muted/50 border-2 hover:border-primary/30 focus:border-primary transition-colors"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-md hover:shadow-lg transition-all duration-300"
                            size="lg"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            {t('addButton')}
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
                            href="/about"
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
