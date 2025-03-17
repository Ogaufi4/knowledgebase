"use client"
import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Progress } from '@/app/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select'
import { Textarea } from '@/app/components/ui/textarea'
// import  {Toast}  from '@/app/components/ui/toast'
// import { toast } from '@/app/hooks/use-toast'
// import { useToast } from '@/app/hooks/use-toast'
import HomeNavigation from '@/app/utils/nav/homeNavigation'
import { CategoryType } from '@/lib/types'
import { cn } from '@/lib/utils'
import { isDragActive } from 'framer-motion'
import { AlertCircle, FileText, LucideFile, Upload, Image, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
// import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone'
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";


interface ExtendedFile extends File {
  preview?: string;
  progress?: number;
}
export default function ContributionPage() {
  //  const {toast} = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState<ExtendedFile[]>([]);
  const maxFiles = 5;
  const maxSize = 10 * 1024 * 1024;
  const showSwal = () => {

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Submission received",
      text: "Thank you for your contribution! Your submission is being reviewed",
      showConfirmButton: false,
      timer: 2800
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: api-> handle form submission using
    setIsUploading(!isUploading);

    console.log(">>>>>>>Submission>>>>>>");
    //  toast.success( "Thank you for your contribution! Your submission id being reviewed. An email will be send once cleared",
    //     )
    showSwal()
    setIsUploading(!isUploading);
  }

  const categoryTypes: CategoryType[] = [
    { key: 'article', name: 'Article' },
    { key: 'historical-artifact', name: 'Historical Artifact' },
    { key: 'flora', name: 'Flora' },
    { key: 'fauna', name: 'Fauna' },
    { key: 'craft', name: 'Craft' },
    { key: 'indeginous', name: 'Indigenous Knowledge' },
    { key: 'other', name: 'Other' },
  ]

  const handlAddTag = () => {
    console.log(">>Handling add tag")
  }

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles)
    },
  })
  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="h-6 w-6" />;
    if (file.type === 'application/pdf') return <FileText className="h-6 w-6" />;
    return <LucideFile className="h-6 w-6" />;
  };
  return (

    <div className='flex flex-col min-h-screen'>
      <HomeNavigation />
      <main className='flex-grow py-16 container px-4 mx-auto '>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-10 text-center'>
            <h1>Contribute Knowledge</h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Share your expertise and research with our community. Your contribution helps expand our collective Knowledge base.
            </p>

          </div>
          {/* Submission Guidelines */}

          <div className='mt-12 bg-muted  p-10 rounded-lg mb-12'>
            <h3 className='text-xl font-bold mb-4'>Submission Guidelines</h3>
            <ul className='list-disc md:list-decimal space-y-2'>
              <li>All submissions must be original or properly attributed with citations.</li>
              <li>Content should be fact-checked and verified from reliable sources.</li>
              <li>Supporting files should be clear, relevant and under 10MB each.</li>
              <li>Submissions will undergo a review process before publication.</li>
              <li>As a contributor you retain copyright of your work but grant us a license to display it.</li>
            </ul>
          </div>


          {/* form */}
          <Card className='border shadow-sm'>
            <CardHeader>
              <CardTitle>Submission Form</CardTitle>
              <CardDescription>
                Please fill out all required fields and follow our submission guidelines.
              </CardDescription>

              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title <span className="text-destructive">*</span></Label>
                    <Input id="title" placeholder="Enter a descriptive title" required />
                  </div>
                  {/* categories */}
                  <div className='space-y-2'>
                    <Label htmlFor="category">Category <span className='text-destructive'>*</span></Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryTypes.map((category, index) => (
                          <SelectItem key={index} value={category.key}>
                            {category.name}

                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* abstract */}
                  <div className="space-y-2">
                    <Label htmlFor="abstract">Abstract <span className="text-destructive">*</span></Label>
                    <Textarea
                      id="abstract"
                      placeholder="Provide a brief summary of your contribution"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {/* content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Detailed Content <span className="text-destructive">*</span></Label>
                    <Textarea
                      id="content"
                      placeholder="Enter the full content of your submission"
                      className="min-h-[200px]"
                      required
                    />
                  </div>

                  {/* tags */}
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="Enter tags separated by commas (e.g., research, history, science)"
                    />
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">research</Badge>
                      <Badge variant="secondary">history</Badge>
                      <Badge variant="secondary">science</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-secondary" onClick={handlAddTag}>+ Add</Badge>
                    </div>
                  </div>

                  {/* file upload */}
                  <div className='space-y-2'>
                    <Label>Supporting files</Label>

                    <div {...getRootProps()}
                      className={cn(
                        'border-2 border-dashed rounded-lg p-8 transition-colors duration-300 ease-in-out',
                        isDragActive() && !isDragReject && 'border-primary bg-primary/5',
                        isDragReject && 'border-destructive bg-destructive/5',
                        !isDragActive && !isDragReject && 'border-border hover:border-primary/50 hover:bg-accent/30',
                        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                      )}
                    >
                      <input {...getInputProps()} />

                      <div className="flex flex-col items-center justify-center text-center">
                        <Upload className={cn(
                          'h-12 w-12 mb-4 transition-colors',
                          isDragActive() && !isDragReject && 'text-primary animate-pulse',
                          isDragReject && 'text-destructive',
                          !isDragActive() && !isDragReject && 'text-muted-foreground'
                        )} />

                        {isDragReject ? (
                          <div className="flex items-center text-destructive">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            <p className="font-medium">Some files are not allowed</p>
                          </div>
                        ) : (
                          <>
                            <p className="text-lg font-medium mb-1">
                              {isDragActive() ? "Drop the files here" : "Drag & drop files here"}
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">
                              or click to browse your files
                            </p>
                          </>
                        )}
                        <div className="flex flex-wrap gap-2 justify-center">
                          <Badge variant="outline">PDF</Badge>
                          <Badge variant="outline">DOCX</Badge>
                          <Badge variant="outline">JPG</Badge>
                          <Badge variant="outline">PNG</Badge>
                        </div>

                        <p className="text-xs text-muted-foreground mt-4">
                          Max {maxFiles} files, up to {Math.round(maxSize / (1024 * 1024))}MB each
                        </p>
                      </div>
                    </div>

                    {/* files */}
                    {files.length > 0 && (
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium">Files ({files.length}/{maxFiles})</h4>
                        <div className='space-y-3'>
                          {files.map((file, index) => (
                            <div key={index} className='flex items-center bg-card rounded-lg p-3 shadow-sm'>
                              <div className="mr-3 text-primary">
                                {getFileIcon(file)}
                              </div>
                              {/* file details */}
                              <div className='flex-1 min-w-0'>
                                <div className='flex justify-between mb-1'>
                                  <p className='font-medium text-sm'>{file.name}</p>
                                  <p className='ml-2 text-xs text-muted-foreground '>{(file.size / 1024).toFixed(1)}KB</p>
                                </div>
                                <Progress value={file.progress} className='h-1' />
                              </div>
                              <Button variant="ghost"
                                size="icon"
                                className='ml-2 text-muted-foreground hover:text-destructive'>
                                <Trash2 className="h-4 w-4" />
                                <span className='sr-only'>Remove file</span>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  <div className='pt-4 border-t'>
                    <div className='flex items-start'>
                      <input type="checkbox" id="terms" required className='mr-2 mt-1' />
                      <Label htmlFor='terms' className='text-sm font-normal'>
                        I confirm that this content is original or properly attributed and I agree to the
                        <a href='#' className='ml-1 hover:underline text-primary'> Terms and Conditions</a>

                      </Label>
                    </div>
                  </div>

                </CardContent>

                <CardFooter className="flex justify-between">
                  {/* <Button variant="outline" type="button">Save Draft</Button> */}
                  <Button type="submit">Submit Contribution</Button>
                </CardFooter>
              </form>

            </CardHeader>

          </Card>



        </div>


      </main>
    </div>
  )
}
