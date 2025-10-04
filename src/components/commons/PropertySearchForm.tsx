'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type QuestionPayload = {
  question: string;
};

type QuickSearchPayload = {
  type: 'buy' | 'rent';
  propertyType: string;
  location: string;
  bedrooms: number;
  minPrice: number;
  maxPrice: number;
};

const PropertyType = [
  'Apartemen',
  'Rumah',
  'Gedung',
  'Ruko',
  'Tanah',
  'Gudang',
  'Pabrik',
];

const PropertySearchForm = () => {
  const questionForm = useForm<QuestionPayload>({
    defaultValues: {
      question: '',
    },
  });

  const quickSearchForm = useForm<QuickSearchPayload>({
    defaultValues: {
      type: 'buy',
      propertyType: '',
      location: '',
      bedrooms: 0,
      minPrice: 0,
      maxPrice: 0,
    },
  });

  const onSubmitQuestion = (payload: QuestionPayload) => {
    console.log(payload);
  };
  const onSubmitQuickSearch = (payload: QuickSearchPayload) => {
    console.log(payload);
  };

  return (
    <Tabs defaultValue="ask-velogo">
      <div className="z-20 md:w-[662px] w-full mx-auto bg-custom-primary-white rounded-2xl overflow-hidden">
        <section className="flex md:flex-row md:space-y-0 space-y-4 flex-col justify-between items-center bg-custom-primary-blue md:px-8 md:py-4 p-5 w-full h-full">
          <h3 className="text-white md:text-left text-center md:text-base text-sm font-semibold">
            Hi, what can velogo help you with?
          </h3>
          <TabsList className="p-3 h-16 rounded-2xl flex space-x-1">
            <TabsTrigger
              value="ask-velogo"
              className="flex-1 cursor-pointer rounded-3xl !text-sm text-custom-primary-blue  data-[state=active]:!bg-custom-primary-blue py-3 px-4 h-11 data-[state=active]:text-white transition-colors duration-200"
            >
              Ask Velogo
            </TabsTrigger>
            <TabsTrigger
              value="quick-search"
              className="flex-1 cursor-pointer rounded-3xl !text-sm text-custom-primary-blue  data-[state=active]:!bg-custom-primary-blue py-3 px-4 h-11 data-[state=active]:text-white transition-colors duration-200"
            >
              Quick Search
            </TabsTrigger>
          </TabsList>
        </section>
        <TabsContent value="ask-velogo" className="py-10 px-8 w-full h-full ">
          <Form {...questionForm}>
            <form onSubmit={questionForm.handleSubmit(onSubmitQuestion)}>
              <FormField
                control={questionForm.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <section className="relative h-full ">
                        <Input
                          placeholder="Enter an address, city, or property type..."
                          className="!h-16 rounded-2xl text-custom-primary-black border border-custom-secondary-hover"
                          {...field}
                        />
                        <Button
                          type="submit"
                          size="icon"
                          className="absolute right-5 hover:bg-custom-primary-blue/80 top-2.5 rounded-lg bg-custom-primary-blue w-11 h-11"
                          aria-label="sent-logo"
                        >
                          <IoPaperPlaneOutline className="text-white" />
                        </Button>
                      </section>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="quick-search" className="py-4 px-7  w-full m-0">
          <Form {...quickSearchForm}>
            <form
              onSubmit={quickSearchForm.handleSubmit(onSubmitQuickSearch)}
              className="flex flex-col space-y-5"
            >
              <FormField
                control={quickSearchForm.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="gap-3">
                    <FormLabel>Do you want to buy or rent?</FormLabel>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        defaultValue="buy"
                        value={field.value}
                        onValueChange={(val) => {
                          if (val) field.onChange(val);
                        }}
                        className="flex gap-2 w-full"
                      >
                        <ToggleGroupItem
                          value="buy"
                          className={cn(
                            '!rounded-4xl',
                            buttonVariants({
                              variant: 'outline',
                              className: cn(
                                'w-full h-11',
                                field.value === 'buy'
                                  ? '!bg-blue-200 border border-custom-primary-blue'
                                  : 'border border-gray-400'
                              ),
                            })
                          )}
                        >
                          Buy
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="rent"
                          className={cn(
                            '!rounded-4xl',
                            buttonVariants({
                              variant: 'outline',
                              className: cn(
                                'w-full h-11',
                                field.value === 'rent'
                                  ? '!bg-blue-200 border border-custom-primary-blue'
                                  : 'border border-gray-400'
                              ),
                            })
                          )}
                        >
                          Rent
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={quickSearchForm.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem className="gap-3">
                    <FormLabel>Property Type?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full !h-12 rounded-2xl border border-gray-400">
                          <SelectValue placeholder="Select Property Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PropertyType.map((value, index) => (
                          <SelectItem key={index} value={value}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className="w-full flex md:flex-row flex-col items-center md:gap-8 gap-5">
                <FormField
                  control={quickSearchForm.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="gap-3 w-full">
                      <FormLabel>Location?</FormLabel>
                      <Input
                        className="w-full !h-12 rounded-2xl border border-gray-400"
                        placeholder="Input Location"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={quickSearchForm.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem className="gap-3 w-full">
                      <FormLabel>Bedrooms?</FormLabel>
                      <Input
                        className="w-full !h-12 rounded-2xl border border-gray-400"
                        type="number"
                        placeholder="0"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex md:flex-row flex-col items-center md:gap-8 gap-5">
                <FormField
                  control={quickSearchForm.control}
                  name="minPrice"
                  render={({ field }) => (
                    <FormItem className="gap-3 w-full">
                      <FormLabel>Min Price?</FormLabel>
                      <Input
                        className="w-full !h-12 rounded-2xl border border-gray-400"
                        type="number"
                        placeholder="Rp. 0"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={quickSearchForm.control}
                  name="maxPrice"
                  render={({ field }) => (
                    <FormItem className="gap-3 w-full">
                      <FormLabel>Max Price?</FormLabel>
                      <Input
                        className="w-full !h-12 rounded-2xl border border-gray-400"
                        type="number"
                        placeholder="Rp. 0"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full cursor-pointer hover:bg-custom-primary-blue/80 rounded-2xl bg-custom-primary-blue h-14 py-4 text-white font-semibold text-base"
              >
                Search
              </Button>
            </form>
          </Form>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default PropertySearchForm;
